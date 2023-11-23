const mongoose = require('mongoose')

//Definir el schema
//Plano gral de todo bootcamp 

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Titulo requerido"],
        maxlength : [30, "Titulo muy largo"],
        minlength : [10, "Titulo muy corto"],
    },
    description:{
        type: String,
        required: [true, "descripción requerida"],
        minlength : [10, "descripción muy corta"],
    },
    weeks:{
        type: Number,
        required: [true, "semanas requeridas"],
        max :[9, "el maximo de semanas es 9"],

    },  
    enroll_cost:{
        type: Number,
        required: [true, "costo inscripción"],
    },  
    minimum_skill:{
        type: [String],
        enum: [ "Beginner" ,
                "Intermediate" ,
                "Intermediate" ,
                "Expert"
            ]

    }
})

//exportar el modelo
const couserModel = mongoose
                    .model("Course" ,
                     courseSchema)

module.exports = couserModel