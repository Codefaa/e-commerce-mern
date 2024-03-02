import './Contacto.css'

function Contacto() {

    return(
        <section className='contacto-seccion'>
            <h1 className='contacto-titulo'>Contacto</h1>
            <p className='contacto-parrafo'>¿Tiene alguna pregunta para nosotros? Desde envíos internacionales hasta consultas de prensa y todo lo demás, háganoslo saber y nos comunicaremos con usted lo antes posible.</p>
            <p className='contacto-parrafo'>Vea nuestras <a className='contacto-enlace' href="#">preguntas frecuentes.</a></p>
            <h4 className='contacto-subtitulo'>Drop us a line</h4>
            <div className='conctacto-contenedor'>
                <input className='contacto-input' type="text" name="" id="" placeholder='Name'/>
                <input className='contacto-input' type="email" name="" id="" placeholder='Email'/>
                <input className='contacto-input' type="tel" name="" id="" placeholder='Phone Number'/>
                
            </div>
            <textarea className='contacto-textarea' name="" id="" cols="30" rows="6" placeholder='Message'></textarea>
            <button className='contacto-boton'>Submit</button>
        </section>
    )
}

export default Contacto;