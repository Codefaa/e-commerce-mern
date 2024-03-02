import './Inicio.css';
import carrusel1 from '../../imagenes/carrusel1.png'
import { Link } from 'react-router-dom';

function Inicio() {

    return(
        <main className='inicio-seccion'>
            <figure className='inicio-figure'>
                <img className='inicio-imagen' src="https://theartifox.com/cdn/shop/files/Copy_of_Table_Walnut_16_2100x.png?v=1701454564" alt="" />
                <div className='inicio-contenedor-figure'>
                    <h1 className='inicio-titulo'>Coleccion de artefactos</h1>
                    <p className='inicio-parrafo'>Eleve su espacio con nuestra mesa y elevador de nogal macizo.</p>
                    <Link to="/artefactos"><button className='inicio-boton'>Compra ahora</button></Link>
                </div>
            </figure>

            <section className='inicio-carrusel'>
                <div className='contenedor-carrusel'>
                    <figure className='carrusel-figure'>
                        <img className='carrusel-imagen' src={carrusel1} alt="" />
                        <h3 className='carrusel-titulo'>MUEBLES DE DISEÑO</h3>
                    </figure>
                    <p className='carrusel-parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam fugiat consequuntur aut quasi at, beatae repellat quae est, reprehenderit mollitia neque deleniti eius in quia eveniet non molestiae fugit.</p>
                    <div className="carrusel-imagenes">
                        <i class="bi bi-chevron-left"></i>
                        <span className='numero-imagen'>1/5</span>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
            </section>
            
            <section>

            </section>


            <section className='inicio-video'>
                <div className='contenedor-video'>
                    <div className='video-arriba'>
                        <h2 className='video-titulo'>Maravillosamente simple y altamente funcional</h2>
                        <p className='video-parrafo'>Mobiliario modular diseñado pensando en tu vida cotidiana. Hecho de madera maciza y construido para durar.</p>
                        <span className='video-span'>MADE IN THE USA</span>
                    </div>
                    <div className='video-abajo'>
                        <video src='https://cdn.shopify.com/s/files/1/1823/9587/files/Walnut_Desk_Combo_Homepage.mp4?v=1640298397' type='video/mp4' autoPlay muted></video>
                    </div>
                </div>
            </section>

            <section className='inicio-categorias'>
                <div className='contenedor-categorias'>
                    <div className='categoria-arriba'>
                        <h2 className='categoria-titulo'>Diseñado para trabajar juntos</h2>
                        <p className='categoria-parrafo'>Explore nuestras colecciones y vea cómo estos ecosistemas reflexivos interactúan entre sí para ayudar a simplificar su vida.</p>
                    </div>

                    <div className='categoria-imagenes'>
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

                </div>
            </section>

        </main>
    )
}

export default Inicio;