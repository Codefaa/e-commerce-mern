import './Pie.css'

function Pie() {

    return(
        <footer className='pie-seccion'>
            
            <div className="pie-izquierda">
                <nav className='pie-arriba'>
                    <a className='pie-enlace-red' href="https://www.instagram.com/garciafacu._/" target='_blank' rel="noreferrer"><i className="bi bi-instagram enlace-pie"></i></a>
                    <a className='pie-enlace-red' href="https://www.facebook.com" target='_blank' rel="noreferrer"><i className="bi bi-facebook enlace-pie"></i></a>
                    <a className='pie-enlace-red' href="https://twitter.com/home" target='_blank' rel="noreferrer"><i className="bi bi-twitter-x enlace-pie"></i></a>
                    <a className='pie-enlace-red' href="https://ar.pinterest.com" target='_blank' rel="noreferrer"><i className="bi bi-pinterest enlace-pie"></i></a>
                    <a className='pie-enlace-red' href="https://www.youtube.com" target='_blank' rel="noreferrer"><i className="bi bi-play-btn-fill enlace-pie"></i></a>
                </nav>
                <div className='pie-abajo'>
                    <h4 className='pie-abajo-titulo'>Be som the know</h4>
                    <p className='pie-abajo-parrafo'>Regístrese para recibir lo último de FACU SHOP.</p>
                    <input className='pie-abajo-input' type="email" name="email" id="" placeholder='tu correo electrónico' />
                    <button className='pie-abajo-boton'>inscribirse</button>
                </div>
            </div>

            <div className='pie-derecha'>
                <nav className="pie-navegador">
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">FAQ</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Financing</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Press & Affiliates</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Terms of Use</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Privacy</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Warranty</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Returns</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Blog</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">COVID-19</a>
                    <a href="https://codefaa.github.io/portafolio-react/" target='_blank' rel="noreferrer" className="pie-derecha-enlace">Do Not Sell My Information</a>
                </nav>
                <select className='pie-derecha-select' name="" id="">
                    <option value="usd">USD $</option>
                    <option value="gbp">GBP $</option>
                    <option value="eur">EUR $</option>
                    <option value="cad">CAD $</option>
                    <option value="aud">AUD $</option>
                </select>
                <p className='pie-derecha-parrafo'>Copyright © 2024 F A C U S H O P</p>
            </div>

            <div className='pie-prueba'>

            </div>

        </footer>
    )
}

export default Pie;