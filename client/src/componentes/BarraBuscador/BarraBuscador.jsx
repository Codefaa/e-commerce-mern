import { Link } from 'react-router-dom';
import './BarraBuscador.css';
import { useState } from 'react';

function BarraBuscador() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            window.location.href = `/artefactos/nombre/${searchTerm}`;
        }
    }

    return ( 
        <div className="navegador-buscador">
            <input
                className='navegador-input'
                type="text"
                placeholder='Buscar...'
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <Link className='barra-enlace' to={searchTerm.trim() !== '' ? `/artefactos/nombre/${searchTerm}` : '/'}><i className="bi bi-search"></i></Link>
        </div>
    );
}

export default BarraBuscador;
