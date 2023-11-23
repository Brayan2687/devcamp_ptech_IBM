const express= require('express')
const couseModel = require('../models/courseModel')
const mongoose = require('mongoose')
const router = express.Router()

//definir rutas de course
//con el ruteador
router.get('/', async (req , res) =>{
    //seleccionar todos los course en la coleccion
    try {
      const course = 
            await couseModel.find()
        if(course.lenght === 0){
            res.
                status(400).
                json({
                    success: false,
                    msg: "No hay course en la coleccion que mostrar"
            })
        }else{
            res.
                status(200).
                json({
                    success: true,
                    data: course
            })
        }  
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        })
    }
     
})

//seleccionar course por id
router.get('/:id', async (req , res) => {

    
    try {
         //recoger el parametro por id 
         courseid = req.params.id
        //validar el id suministrado
        if(!mongoose.Types.ObjectId.isValid(courseid)){
            res.status(400).json({
                succes: false,
                msg: "el id no es valido"
            })
        }else{
          //seleccionar el bootcamp por id
            selected_course = await couseModel.
                        findById(courseid)

            if(selected_course){
            //se encontro el bootcamp
                res.status(200).json({
                    success: true,
                    results:  selected_course
                })
            }else{
            //no se encotro el bootcamp
                res.status(400).json({
                    succes:false,
                    msg:`no se encontro el bootcamp ${courseid}`
                })
            }
        //enviar respuesta
          
        }
        
    }catch (error){
            res.status(500).json(
            {
                success: false,
                msg: error.message
        })
    }
   
})

//crear bootcamp
router.post('/', async(req , res)=>{
    try {
    const newCourse = await couseModel.create(req.body)
    res.status(201).json({
        success: true,
        results: newCourse
    })
    } catch (error) {
        res.status(500).json({
            succes: false, 
            msg: error.message
        })
        
    }
    
})


router.put('/:id', async(req , res)=>{

    try {
        //recoger el parametro por id 
        courseid = req.params.id
       //validar el id suministrado
       if(!mongoose.Types.ObjectId.isValid(courseid)){
           res.status(400).json({
               succes: false,
               msg: "el id no es valido"
           })
       }else{
         //seleccionar el bootcamp por id
           selected_course = await couseModel.
                       findByIdAndUpdate(courseid, 
                                         req.body,
                                         {
                                             new:true
                                         })

           if(selected_course){
           //se encontro el bootcamp
               res.status(200).json({
                   success: true,
                   results: selected_course
               })
           }else{
           //no se encotro el bootcamp
               res.status(400).json({
                   succes: false,
                   msg:`no se encontro el bootcamp ${courseid}`
               })
           }
       //enviar respuesta
         
       }
       
   }catch (error){
           res.status(500).json(
           {
               success: false,
               msg: error.message
       })
   }
  
})

router.delete('/:id', async(req , res)=>{

    try {
        //recoger el parametro por id 
       courseid = req.params.id
       //validar el id suministrado
       if(!mongoose.Types.ObjectId.isValid(courseid)){
           res.status(400).json({
               succes: false,
               msg: "el id no es valido"
           })
       }else{
         //seleccionar el bootcamp por id
           selected_course = await couseModel.
                       findByIdAndDelete(courseid, 
                                         req.body,
                                         {
                                             new:true
                                         })

           if(selected_course){
           //se encontro el bootcamp
               res.status(200).json({
                   success: true,
                   results: selected_course
               })
           }else{
           //no se encotro el bootcamp
               res.status(400).json({
                   succes: false,
                   msg:`no se encontro el bootcamp ${courseid}`
               })
           }
       //enviar respuesta
         
       }
       
   }catch (error){
           res.status(500).json(
           {
               success: false,
               msg: error.message
       })
   }
  
})

//exportar ruteador
module.exports = router