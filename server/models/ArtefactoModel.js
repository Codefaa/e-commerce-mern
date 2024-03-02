const mongoose = require('mongoose');

const artefactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    imagen: {
        type: String,
        require: true,
        trim: true
    },
    color: {
        type: String,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    caracteristicas: {
        type: String,
        require: true,
        trim: true
    },
    dimensiones: {
        type: String,
        require: true,
        trim: true
    },
    peso: {
        type: Number,
        require: true,
        trim: true
    },
    materiales: {
        type: String,
        require: true,
        trim: true
    },
    stock: {
        type: Number,
        require: true,
        trim: true
    },
    categoria: {
        type: String,
        require: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('artefacto', artefactoSchema);