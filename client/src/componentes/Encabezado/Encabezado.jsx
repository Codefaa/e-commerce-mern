import { Link } from 'react-router-dom';
import './Encabezado.css'

function Encabezado() {


    return(
        <header className='encabezado-barra'>
            <Link className='encabezado-enlace' to="/artefactos"><p className='encabezado-parrafo'>¡Bienvenido, administrador! Gestiona los artefactos con facilidad.</p></Link>
       </header>
    )
}

export default Encabezado; 