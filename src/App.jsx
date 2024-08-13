import './App.css'
import { Route, Routes } from 'react-router-dom'
// context
import { CategoryProvider } from './context/CategoryContext'
/* componentes */
import Header from '../src/components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Proyectos from './pages/Proyectos/Proyectos'
import Nosotros from './pages/Nosotros/Nosotros'
import Servicios from './pages/Servicios/Servicios'
import Contacto from './pages/Contacto/Contacto'
import QuieroAyudar from './pages/QuieroAyudar/QuieroAyudar'
import WilliamMorris from './components/Nosotros/WilliamMorris/WilliamMorris'
import Historia from './components/Nosotros/Historia/Historia'
import Financiamiento from './components/Nosotros/Financiamiento/Financiamiento'

function App () {
  return (
    <CategoryProvider>
       <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/quiero-ayudar' element={<QuieroAyudar />} />
          <Route path='/william-morris' element={<WilliamMorris />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/financiamiento' element={<Financiamiento />} />
          <Route path='*' element={<h1>404 - Not Found</h1>} />
        </Routes>
      <Footer />
    </CategoryProvider>
  )
}

export default App
