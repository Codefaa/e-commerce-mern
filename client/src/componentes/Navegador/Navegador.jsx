import { Link } from 'react-router-dom';
import './Navegador.css'
import BarraBuscador from '../BarraBuscador/BarraBuscador';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Navegador() {

    const { cantidadEnCarrito } = useContext(CartContext);

    return(
        <aside className='navegador-seccion'>
            <div className='navegador-nav'>
                <Link to="/carrito" className='navegador-enlace-carrito'>
                    <i className="bi bi-bag"><span className='numerito'>{cantidadEnCarrito()}</span></i>
                </Link>
                <Link to="/" className='navegador-tituloenlace'><h1 className='navegador-titulo'>Facu shop</h1></Link>
                <nav className='navegador-nav-arriba'>   
                    <Link to="/artefactos" className="navegador-enlace-arriba">Comprar todo</Link>
                    <Link to="/coleccion" className="navegador-enlace-arriba">Coleccion</Link>
                </nav>
                <nav className='navegador-nav-abajo'>
                    <Link to="/sobre" className="navegador-enlace-abajo">Acerca de mi</Link>
                    <Link to="/faq" className="navegador-enlace-abajo">FAQ</Link>
                    <Link to="/contacto" className="navegador-enlace-abajo">Contacto</Link>
                </nav>
                <BarraBuscador />
            </div>
        </aside>

    )
}

export default Navegador;