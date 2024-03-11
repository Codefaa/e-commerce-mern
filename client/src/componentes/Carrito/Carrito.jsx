import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Carrito.css';
import { Link } from 'react-router-dom';

function Carrito() {

    const { carrito, cantidadEnCarrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const [comprar, setComprar] = useState(false);

    function handleVaciar() {
        vaciarCarrito();
    }

    function handleComprar() {
        vaciarCarrito();
        setComprar(true);
    }

    return(
        <section className='carrito-seccion'>

            {
            carrito.length > 0 ? 
            
            <div className='carrito-contenedor'>

                <div className='carrito-arriba'>
                    <h1 className='carrito-titulo'>Carrito de Compra</h1>
                    <p>Cantidad total de artefactos: {cantidadEnCarrito()}</p>
                </div>
                
                <main className='carrito-artefactos'>
                    
                    {
                        carrito.map((artefacto) => (
                            <div className='carrito-artefacto'>
                                <figure className='carrito-imagendatos'>
                                    <img className='carrito-imagen' src={artefacto.imagen} alt={artefacto.nombre} />
                                    <div className='carrito-datos'>
                                        <h4 className='carrito-nombre'>{artefacto.nombre}</h4>
                                        <span className='carrito-precio'>${artefacto.precio}</span>
                                        <span className='carrito-preciototal'>${artefacto.precio * artefacto.cantidad} ({artefacto.cantidad} x {artefacto.precio})</span>
                                    </div>
                                </figure>
                                <span className='span-cantidad'>Cantidad: {artefacto.cantidad}</span>  
                            </div>                                
                        ))
                    }

                </main>

                <div className='carrito-comprar'>
                    <p className='parrafo-total'>Total: <span className='span-total'>${precioTotal()} USD</span></p>
                    <button className='carrito-boton' onClick={handleComprar}>Confirmar compra</button>
                </div>
                <button className='carrito-vaciar' onClick={handleVaciar}>Vaciar</button>
            </div>

            : 

            <div className='carritovacio-contenedor'>
                <h1 className='carrito-titulo'>Carrito de Compra</h1>
                <span>{comprar ? 'Muchas gracias por tu compra. 😄' : 'Su carrito está vacío. 😞'}</span>
                <Link to="/artefactos"><button className='carritovacio-boton'>Continuar navegando</button></Link>
            </div>
            }



        </section>
    )
}

export default Carrito;