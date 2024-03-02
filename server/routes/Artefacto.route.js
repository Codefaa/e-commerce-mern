const express = require('express');
const { leerArtefactos, agregarArtefacto, borrarArtefacto, modificarArtefacto, leerId, leerCategorias, leerNombre } = require('../controllers/ArtefactoController')
const api = express.Router();

api.get('/artefactos', leerArtefactos);

api.post('/agregar', agregarArtefacto);

api.delete('/borrar/:id', borrarArtefacto);

api.put('/modificar/:id', modificarArtefacto);

api.get('/artefactos/detalles/:id_artefacto', leerId)

api.get('/artefactos/categoria/:categoria_artefacto', leerCategorias)

api.get('/artefactos/nombre/:nombre_artefacto', leerNombre)

module.exports = api;