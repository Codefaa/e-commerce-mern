import axios from 'axios';

const API = 'http://localhost:5005/api'

export const leerArtefacto = () => axios.get(`${API}/artefactos`)

export const leerCategoriaArtefacto = categoria => axios.get(`${API}/artefactos/categoria/${categoria}`)

export const leerNombreArtefacto = nombre => axios.get(`${API}/artefactos/nombre/${nombre}`)

export const leerDetalleArtefacto = id => axios.get(`${API}/artefactos/detalles/${id}`)

export const agregarArtefacto = artefacto => axios.post(`${API}/agregar`, artefacto)

export const borrarArtefacto = id => axios.delete(`${API}/borrar/${id}`)

export const modificarArtefacto = artefacto => axios.put(`${API}/modificar/${artefacto._id}`, artefacto)