import { Link } from 'react-router-dom';
import './Artefacto.css';
import { borrarArtefacto, leerArtefacto } from '../../api/auth';
import ArtefactoAgregar from '../ArtefactoAgregar/ArtefactoAgregar';
import { useState } from 'react';

function Artefacto({ artefactos, setArtefactos }) {

    const [estadoModal, setEstadoModal] = useState(false);
    const [artefactoSeleccionado, setArtefactoSeleccionado] = useState(null);

    async function borrar(id) {
        await borrarArtefacto(id);
        await actualizarArtefactos();
    }

    async function actualizarArtefactos() {
        const res = await leerArtefacto();
        setArtefactos(res.data);
    }

    function seleccionarArtefacto(artefacto) {
        setArtefactoSeleccionado(artefacto);
        setEstadoModal(true);
    }

    return (
        <>
            {artefactos &&
                artefactos.map((artefacto) => {
                    return (
                        <section className='seccion-artefacto' key={artefacto._id}>
                            <Link to={`/artefactos/detalles/${artefacto._id}`} className='enlace-artefacto'>
                                <figure className='artefacto-figure'>
                                    <img className='imagen-artefacto' src={artefacto.imagen} alt={artefacto.nombre} />
                                </figure>
                                <h4 className='titulo-artefacto'>{artefacto.nombre}</h4>
                            </Link>
                            <div className='datos-artefacto'>
                                <p className='precio-artefacto'>${artefacto.precio}</p>
                                <div className='iconos-artefacto'>
                                    <i className="bi bi-trash3-fill" onClick={() => borrar(artefacto._id)}></i>
                                    <i className="bi bi-pencil-square" onClick={() => seleccionarArtefacto(artefacto)}></i>
                                </div>
                            </div>
                        </section>
                    )
                })}
            {artefactoSeleccionado && 
            <ArtefactoAgregar estadoModal={estadoModal} setEstadoModal={setEstadoModal} artefactoSeleccionado={artefactoSeleccionado} setArtefactoSeleccionado={setArtefactoSeleccionado} setArtefactos={setArtefactos} />}
        </>
    )
}

export default Artefacto;
