import './Sobre.css';

function Sobre() {

    return(
        <section className='sobre-seccion'>
            <div className='sobre-contenedor'>
                <img src="https://cdn.shopify.com/s/files/1/1823/9587/files/New_Sarah_1024x1024.png?v=1619827906" alt="" className="sobre-imagen-primera" />
                <img src="https://cdn.shopify.com/s/files/1/1823/9587/files/Founders_01_1024x1024.jpg?v=1617075979" alt="" className="sobre-imagen-segunda" />
            </div>
            <h2 className='sobre-titulo'>Mensaje de nuestros fundadores</h2>
            <p className='sobre-parrafo'>Artifox nació de nuestra necesidad personal de un escritorio que fuera estéticamente agradable y fomentara un entorno de trabajo más funcional y eficiente. Cuando las personas cercanas a nosotros se dieron cuenta, descubrimos que había muchas personas interesadas en utilizar el escritorio en su propio espacio. A partir de ahí, nos propusimos crear productos hermosos y funcionales para la vida moderna utilizando únicamente materiales de calidad. Nos dedicamos a diseñar y fabricar localmente productos para personas como usted, personas que se preocupan profundamente por su trabajo, su espacio y su comunidad. Con su apoyo, podemos hacer lo que amamos: inspirar a las personas a considerar cuidadosamente su espacio.</p>
            <span className='sobre-span'>Dan y Sarah Mirth</span>
        </section>
    )
}

export default Sobre;