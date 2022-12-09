const { Schema, model } = require('mongoose');
// const { comentarioSchema } = require('./comentarios.model');

const libroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "Debe ingresar un titulo"],
        minlength: [3, "Titulo no puede tener menos de 2 caracteres"]
    },
    autor: {
        type: String,
        required: [true, "Debe ingresar un nombre de Autor para crear libro"],
        minlength: [3, "Nombre de Autor no puede tener menos de 2 caracteres"]
    },
    editorial: {
        type: String,
        required: [true, "Debe ingresar un nombre de Editorial"],
        minlength: [3, "Nombre de Editorial no puede tener menos de 2 caracteres"]
    },

    descripcion: {
        type: String,
        required: [true, "Debe ingresar descripción"],
        minlength: [3, "Ingrese Mínimo 3 caracteres para la Descripción"]
    },
   
    precio: {
        type: Number,
        required: [true, "Debe ingresar un precio de paquete"]
        
    }, 
    fecha_edicion: {
        type: Date,
        required: [true, "Ingrese Fecha de Edicion"]
    },

    categoria:{
        type: String,
        required: [true, "Debe ingresar Categoria"],
        minlength: [3, "Ingrese Categoría mínimo tres caracteres"]

    },
    
    // comentarios: [comentarioSchema]



}, { timestamps: true });

const Libro = model('Libro', libroSchema);

module.exports = Libro;