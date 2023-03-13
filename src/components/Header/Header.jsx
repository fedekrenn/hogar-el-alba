import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
/* Assets */
import logo from '../../../src/logo.png'
import bm from '../../assets/img/bm.png'
import headerBackground from '../../assets/img/bck-header.png'
// Context
import { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'

const Header = () => {
  const { activeCategory } = useContext(CategoryContext)

  const [bmOpen, setBmOpen] = useState(false)

  const bmChange = () => {
    setBmOpen(!bmOpen)
  }

  const nosotrosIsActive =
    activeCategory === 'nosotros' ? 'category-active' : ''
  const proyectosIsActive =
    activeCategory === 'proyectos' ? 'category-active' : ''
  const serviciosIsActive =
    activeCategory === 'servicios' ? 'category-active' : ''
  const contactoIsActive =
    activeCategory === 'contacto' ? 'category-active' : ''

  return (
    <header>
      <nav>
        <div className='logo-container'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </div>
        <div className={`categories-container ${bmOpen && 'open'}`}>
          <ul className='categories'>
            <li className={`category ${nosotrosIsActive}`} onClick={bmChange}>
              <Link to='/nosotros'>Nosotros</Link>
            </li>

            <li className={`category ${proyectosIsActive}`} onClick={bmChange}>
              <Link to='/proyectos'>Proyectos</Link>
            </li>

            <li className={`category ${serviciosIsActive}`} onClick={bmChange}>
              <Link to='/servicios'>Servicios</Link>
            </li>

            <li className={`category ${contactoIsActive}`} onClick={bmChange}>
              <Link to='/contacto'>Contacto</Link>
            </li>
          </ul>

          <Link to='/quiero-ayudar' className='donate-btn' onClick={bmChange}>
            QUIERO AYUDAR
          </Link>
        </div>

        <div className={`bm-container ${bmOpen && 'open'}`} onClick={bmChange}>
          <img src={bm} alt='burguer-menu' />
        </div>
      </nav>
      <div className='background-header-container'>
        <img src={headerBackground} alt='background-header' />
      </div>
    </header>
  )
}

export default Header
