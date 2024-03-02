import Encabezado from './componentes/Encabezado/Encabezado'
import './App.css';
import Navegador from './componentes/Navegador/Navegador';
import Inicio from './componentes/Inicio/Inicio';
import Pie from './componentes/Pie/Pie';
import Sobre from './componentes/Sobre/Sobre';
import FAQ from './componentes/FAQ/FAQ';
import Contacto from './componentes/Contacto/Contacto';
import ArtefactoLista from './componentes/ArtefactoLista/ArtefactoLista';
import ArtefactoDetalle from './componentes/ArtefactoDetalle/ArtefactoDetalle';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Coleccion from './componentes/Coleccion/Coleccion';
import ArtefactoAgregar from './componentes/ArtefactoAgregar/ArtefactoAgregar';
import Carrito from './componentes/Carrito/Carrito';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          
          <Encabezado />
          <Navegador />

          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/faq' element={<FAQ />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='/artefactos' element={<ArtefactoLista />} />
            <Route path='/artefactos/categoria/:categoria_artefacto' element={<ArtefactoLista />} />
            <Route path='/artefactos/nombre/:nombre_artefacto' element={<ArtefactoLista />} />
            <Route path='/coleccion' element={<Coleccion />} />
            <Route path='/artefactos/detalles/:id_artefacto' element={<ArtefactoDetalle />} />
            <Route path='/carrito' element={<Carrito /> }/>
            <Route path='/artefacto/agregar' element={<ArtefactoAgregar /> }/>
          </Routes>

          <Pie />

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
