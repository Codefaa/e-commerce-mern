import { useParams } from 'react-router-dom';
import './ArtefactoDetalle.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { leerDetalleArtefacto } from '../../api/auth';

function ArtefactoDetalle() {

    const { id_artefacto } = useParams();

    const [artefacto, setArtefacto] = useState({});
    const [cantidad, setCantidad] = useState(1);
    
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);
    console.log(id_artefacto);
      
    useEffect(() => {
        async function leerDetalles() {
            try {
              const res = await leerDetalleArtefacto(id_artefacto);
              setArtefacto(res.data);
            } catch (error) {
              console.error('Error al leer detalles del artefacto:', error);
            }
          };

        leerDetalles();
    }, [id_artefacto])

    function handleSumar() {
        if (cantidad < artefacto.stock) setCantidad(cantidad + 1);
    }

    function handleRestar() {
        if (cantidad > 1) setCantidad(cantidad - 1);
    }


    return(
        <section className='artefactodetalle-seccion'>

            <div className="artefactodetalle-contenedor" key={artefacto._id}>
                
                <p className='artefactodetalle-titulo'>Home/ All Artefacts/ {artefacto.categoria}</p>

                <div className="artefactodetalle-izquierda">
                    <h1 className='artefactodetalle-nombre'>{artefacto.nombre}</h1>
                    <span className='artefactodetalle-color'>Color: {artefacto.color}</span>
                    <span className='artefactodetalle-precio'>${artefacto.precio}</span>
                    <div className='artefactodetalle-cantidad'>
                        <button className='artefactodetalle-restar' onClick={handleRestar}>-</button>
                        <span className='artefactodetalle-numero'>{cantidad}</span>
                        <button className='artefactodetalle-sumar' onClick={handleSumar}>+</button>
                    </div>
                    <button className='artefactodetalle-boton' type="submit" onClick={() => agregarAlCarrito(artefacto, cantidad)}>Agregar al carrito</button>
                    <p>Desde $162/mes con Affirm. <a className='artefactodetalle-enlace' href="https://codefaa.github.io/portafolio-react/">Aprende más</a></p>
                    <p className='artefactodetalle-parrafo'>{artefacto.nombre} Estimación de envío: 5 a 7 semanas</p>
                    <details className='artefactodetalle-details'>
                        <summary className='artefactodetalle-summary'>Descripcion</summary>
                        <p className='artefactodetalle-sumary-p'>{artefacto.descripcion}</p>
                    </details>
                    <details className='artefactodetalle-details'>
                        <summary className='artefactodetalle-summary'>Caracteristicas</summary>
                        <p className='artefactodetalle-sumary-p'>{artefacto.caracteristicas}</p>
                    </details>
                    <details className='artefactodetalle-details'>
                        <summary className='artefactodetalle-summary'>ESPECIFICACIONES</summary>
                        <div className='artefactodetalle-especificaciones'>
                            <span className='span-dimensiones'>Dimeniones: </span>
                            <p className='artefactodetalle-sumary-p'>{artefacto.dimensiones}</p>
                            <span className='span-peso'>Peso: </span>
                            <p className='artefactodetalle-sumary-p'>{artefacto.peso} lb</p>
                        </div>
                    </details>
                    <details className='artefactodetalle-details'>
                        <summary className='artefactodetalle-summary'>Materiales</summary>
                        <p className='artefactodetalle-sumary-p'>{artefacto.materiales}</p>
                    </details>
                </div>
        
                <div className="artefactodetalle-derecha">
                    <figure className='artefactodetalle-figure'>
                        <img className='artefactodetalle-imagen' src={artefacto.imagen} alt="" />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default ArtefactoDetalle;