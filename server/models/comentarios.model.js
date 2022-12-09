const { Schema, model } = require('mongoose');

const comentarioSchema = new Schema({
    comentario: {
        type: String

    },
    

}, { timestamps: true });

const Comentario = model('Comentario', comentarioSchema);

module.exports = { Comentario,comentarioSchema
};