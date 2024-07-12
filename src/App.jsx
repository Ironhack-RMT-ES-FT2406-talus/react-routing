
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Location from './pages/Location'
import Usuarios from './pages/Usuarios'
import UserDetails from './pages/UserDetails'

function App() {

  return (
    <>
     
     <nav>
        {/* <a href="/">Home</a>
        <br />
        <a href="/conocenos">Conoce al equipo</a>
        <br />
        <a href="/location/sede-principal">Ubicación</a> */}

        <Link to="/">Home</Link>
        <br />
        <Link to="/conocenos">Conoce al equipo</Link>
        <br />
        <Link to="/location/sede-principal">Ubicación</Link>
        <br />
        <Link to="/usuarios">Ver todos los usuarios</Link>
        {/* //* En react NUNCA debemos usar etiquetas de tipo <a> para navegación INTERNA. Para externos si usamos <a> */}

     </nav>

    <Routes>

      {/* aqui estaran organizadas todas las rutas/direcciones de nuestra web */}
      {/* esto funciona como un condicional */}
      <Route path="/" element={ <HomePage /> }/>
      <Route path="/conocenos" element={ <About /> }/>
      <Route path="/location/sede-principal" element={ <Location /> }/>
      <Route path="/usuarios" element={ <Usuarios /> }/>

      <Route path="/usuarios/:idDelUsuario" element={ <UserDetails/> }/>
      {/* //* parametros dinamicos. cajitas donde almacenamos cualquier valor posible del URL */}

    </Routes>



    </>
  )
}

export default App
