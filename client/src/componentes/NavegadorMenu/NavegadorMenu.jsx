import { Link } from 'react-router-dom';
import './NavegadorMenu.css';
import BarraBuscador from '../BarraBuscador/BarraBuscador';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

function NavegadorMenu() {
    
    const { cantidadEnCarrito } = useContext(CartContext);
    const [menu, setMenu] = useState(true);

    function toggleMenu() {
        setMenu(!menu);
    }

    console.log(menu);

    return(
        <>
        <div className="navegador-ventana">
            <Link to="/" className='navegador-tituloenlace'><h1 className='navegador-titulo'>Facu shop</h1></Link>
            
            <nav className='contenedor-ventana'>
            <Link to="/carrito" className='navegador-enlace-carrito'>
                <i className="bi bi-bag bi-ventana"><span className='numerito'>{cantidadEnCarrito()}</span></i>
            </Link>
            <i class="bi bi-list bi-ventana" onClick={toggleMenu}></i>
            </nav>
        </div>

        <section className={`menu-ventana${ menu ? 'isActive' : ''}`}>
            <div className={`menu-contenedor${ menu ? 'isActive' : ''}`}>
                <i class="bi bi-x-lg ventana-cerrar" onClick={toggleMenu}></i>
                    <nav className={`ventana-arriba${ menu ? 'isActive' : ''}`}>   
                        <Link onClick={toggleMenu} to="/artefactos" className="navegador-enlace-arriba">Comprar todo</Link>
                        <Link onClick={toggleMenu} to="/coleccion" className="navegador-enlace-arriba">Coleccion</Link>
                    </nav>
                    <nav className={`ventana-abajo${ menu ? 'isActive' : ''}`}>
                        <Link onClick={toggleMenu} to="/sobre" className="navegador-enlace-abajo">Acerca de mi</Link>
                        <Link onClick={toggleMenu} to="/faq" className="navegador-enlace-abajo">FAQ</Link>
                        <Link onClick={toggleMenu} to="/contacto" className="navegador-enlace-abajo">Contacto</Link>
                    </nav>
                    <div className={`ventana-buscador${ menu ? 'isActive' : ''}`}>
                        <BarraBuscador onClick={toggleMenu}/>
                    </div>
                    
            </div>
        </section>
        </>
    )
}

export default NavegadorMenu;