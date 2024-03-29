import { useEffect, useState } from 'react';
import Artefacto from '../Artefacto/Artefacto';
import './ArtefactoLista.css'
import { Link, useParams } from 'react-router-dom';
import ArtefactoAgregar from '../ArtefactoAgregar/ArtefactoAgregar';
import { leerArtefacto, leerCategoriaArtefacto, leerNombreArtefacto } from '../../api/auth';

function ArtefactoLista() {
    
    const { categoria_artefacto, nombre_artefacto } = useParams();
    const [artefactos, setArtefactos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [estadoModal, setEstadoModal] = useState(false);

    useEffect(() => {
        let promise;
    
        if (categoria_artefacto) {
            promise = leerCategoriaArtefacto(categoria_artefacto);
        } else if (nombre_artefacto) {
            promise = leerNombreArtefacto(nombre_artefacto);
        } else {
            promise = leerArtefacto();
        }
    
        promise.then(response => setArtefactos(response.data))
               .catch(error => console.error(error))
               .finally(() => setLoading(false));
    
    }, [categoria_artefacto, nombre_artefacto]);
    


    return(
        <section className='artefacto-seccion'>
            <div className='artefacto-contenedor'>
                
            <div className="artefacto-p-agregar">

            {!categoria_artefacto && !nombre_artefacto && (
                <>
                    <p><Link to='/' className='volver-inicio'>Inicio</Link> / Todos los artefactos</p>
                    <h1>Todos los artefactos</h1>
                </>
            )}
            {categoria_artefacto && (
                <>
                    <p><Link to='/' className='volver-inicio'>Inicio</Link> / {categoria_artefacto}</p>
                    <h1>{categoria_artefacto + 's'}</h1>
                </>
            )}
            {nombre_artefacto && (
                <>
                {console.log(artefactos)}
                    <p><Link to='/' className='volver-inicio'>Inicio</Link> / Resultados de la busqueda: "{nombre_artefacto}"</p>
                    <h1>Artefactos para "{nombre_artefacto}"</h1>
                    {artefactos.length === 0 && (
                    <p>No se ha encontrado ningún artefacto con el nombre especificado.</p>
                    )}
                </>
            )}

            
                <p>Productos minimalistas para tu hogar y oficina.</p>
                <button className='artefacto-boton' onClick={() => setEstadoModal(!estadoModal)}>Agregar Nuevo Artefacto <i class="bi bi-person-fill-add"></i></button>
                <ArtefactoAgregar estadoModal={estadoModal} setEstadoModal={setEstadoModal} setArtefactos={setArtefactos} />
            </div>
            
            {loading && <h1 className='load-mensaje'>Cargando productos...</h1>}
            {!loading && artefactos &&

            <section className="artefacto-cartas">
                <Artefacto artefactos={artefactos} setArtefactos={setArtefactos} />
            </section>
            }
            </div>
        </section>
    )
}

export default ArtefactoLista;