import { Link } from 'react-router-dom';
import './Coleccion.css';

function Coleccion() {
    return(
        <section className='coleccion-seccion'>
            <p><Link to='/' className='volver-inicio'>Inicio</Link></p>
            <h1 className='coleccion-titulo'>Coleccion</h1>
            
            <div className='coleccion-imagenes'>
                <Link to='/artefactos/categoria/Escritorio'>
                <figure className='contenedor-coleccion'>
                    <img className='coleccion-imagen' src="//theartifox.com/cdn/shop/files/artifox_season-for-reset_whiteoak-photo-series_fullsetup_v2_860x.png?v=1615850592" alt="" />
                    <h1 className='tititulo-prueba'>Escritorios</h1>
                    <div className='capa'>
                        <h1 className='tititulo-coleccion'>Escritorios</h1>
                    </div>
                </figure>
                </Link>
                <Link to="/artefactos/categoria/Silla">
                <figure className="contenedor-coleccion">
                    <img className='coleccion-imagen' src="//theartifox.com/cdn/shop/files/Gallery-00-artifox-desk-walnut_5c114211-37f0-4e2b-9b7b-994062a2be4d_860x.jpg?v=1634219485" alt="" />
                    <h1 className='tititulo-prueba'>Siilas</h1>
                    <div className='capa'>
                        <h1 className='tititulo-coleccion'>Sillas</h1>
                    </div>
                </figure>
                </Link>
                <Link to="/artefactos/categoria/Accesorio">
                <figure className="contenedor-coleccion">
                    <img className='coleccion-imagen' src="https://theartifox.com/cdn/shop/files/artifox_walnut-smoke_3-table-setups_600x.png?v=1620153347" alt="" />
                    <h1 className='tititulo-prueba'>Accesorios</h1>
                    <div className='capa'>
                        <h1 className='tititulo-coleccion'>Accesorios</h1>
                    </div>
                </figure>
                </Link>
                <Link to="/artefactos/categoria/Porta bicicleta">
                <figure className="contenedor-coleccion">
                    <img className='coleccion-imagen' src="//theartifox.com/cdn/shop/files/artifox_blackoak-smoke_halfsetup_860x.png?v=1614293425" alt="" />
                    <h1 className='tititulo-prueba'>Porta bicicletas</h1>
                    <div className='capa'>
                        <h1 className='tititulo-coleccion'>Porta biciletas</h1>
                    </div>
                </figure>
                </Link>
            </div>
        </section>
    )
}

export default Coleccion;