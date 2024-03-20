const ArtefactoModel = require('../models/ArtefactoModel') 

// async function leerArtefactos(req, res) {

//     const artefactos = await ArtefactoModel
//     .find()
//     .then((allArtefactos) => res.json(allArtefactos))
// }

async function leerArtefactos(req, res) {
    const ordenCategorias = {
        "Escritorio": 1,
        "Silla": 2,
        "Accesorio": 3,
        "Porta bicleta": 4
    };

    const artefactos = await ArtefactoModel
        .find()
        .sort({ "categoria": 1 }) 
        .then((allArtefactos) => {
            allArtefactos.sort((a, b) => {
                return ordenCategorias[a.categoria] - ordenCategorias[b.categoria];
            });
            res.json(allArtefactos);
        })
}

async function agregarArtefacto(req, res) {
    const { nombre, imagen, color, precio, descripcion, caracteristicas, dimensiones, peso, materiales, categoria } = req.body;

    try {
        const nuevoArtefacto = new ArtefactoModel({
            nombre,
            imagen,
            color,
            precio,
            descripcion,
            caracteristicas,
            dimensiones,
            peso,
            materiales,
            categoria,
            stock: 10
        })
        
        const guardarArtefacto = await nuevoArtefacto.save();
        res.json(guardarArtefacto);
    }
    catch(error) {
        console.error(error);
    }
}

async function borrarArtefacto(req, res) {
    const { id } = req.params;

    ArtefactoModel
        .deleteOne({_id: id})
        .then((artefacto) => res.json(artefacto))
        .catch((error) => res.json({ message: error }));
}

async function modificarArtefacto(req, res) {

    const { id } = req.params;
    const { nombre, imagen, color, precio, descripcion, caracteristicas, dimensiones, peso, materiales, categoria } = req.body;

    ArtefactoModel
        .findOneAndUpdate({_id: id}, {$set: {nombre, imagen, color, precio, descripcion, caracteristicas, dimensiones, peso, materiales, categoria}})
        .then((artefacto) => res.json(artefacto))
        .catch((error) => res.json({ message: error }));
}

async function leerId(req, res) {

    const { id_artefacto } = req.params;

    ArtefactoModel
        .findById(id_artefacto)
        .then((artefacto) => res.json(artefacto))
}

async function leerCategorias(req, res) {

    const { categoria_artefacto } = req.params;

    ArtefactoModel
        .find({ categoria: categoria_artefacto })
        .then((allArtefactos) => res.json(allArtefactos))
}

async function leerNombre(req, res) {

    const { nombre_artefacto } = req.params;

    ArtefactoModel
        .find({ nombre: { $regex: new RegExp(nombre_artefacto, 'i') } })
        .then((artefacto) => res.json(artefacto))
}

module.exports = {
    leerArtefactos,
    agregarArtefacto,
    borrarArtefacto,
    modificarArtefacto,
    leerId,
    leerCategorias,
    leerNombre
}