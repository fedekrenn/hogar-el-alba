import './Nosotros.css'
import { Link } from 'react-router-dom'
// context
import { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
/* imágenes */
import waveNosotros from '../../assets/img/nosotros/wave-acerca-nosotros.png'

const Nosotros = () => {
  const { changeCategory } = useContext(CategoryContext)

  return (
    <main className='nosotros' onLoad={() => changeCategory('nosotros')}>
      <div className='info-nosotros-container'>
        <div className='subcategories-nosotros-container'>

          <Link to='/nosotros'>
            <button className='acerca-nosotros-btn'>
                <h1>Acerca de nosotros</h1>
            </button>
          </Link>

          <Link to='/william-morris'>
            <button className='nosotros-btn'>William C. Morris</button>
          </Link>

          <Link to='/historia'>
            <button className='nosotros-btn'>Historia del hogar</button>
          </Link>

          <Link to='/financiamiento'>
            <button className='nosotros-btn'>Cómo nos financiamos</button>
          </Link>
        </div>
        <div className='info-text-nosotros-container'>
          <div className='info-text-nosotros'>
            <p>
              El Hogar El Alba es una Asociación Civil fundada por William Case
              Morris y dedicada, desde 1925, a brindar un espacio de contención,
              crecimiento, abrigo y protección a niños, niñas y adolescentes con
              derechos vulnerados.
            </p>
            <p>
              A lo largo de su trayectoria, el hogar ha llevado adelante
              diferentes programas y proyectos en pos de la niñez desprotegida.
            </p>
            <p>
              Se realizaron alianzas y articulaciones con distintas
              instituciones como la fundación CDI (capacitación digital),
              fundación Banco de Alimentos, Universidad Nacional de Lomas de
              Zamora, Canford School, Sams y Latin Link. También participó en
              concursos y foros sobre temáticas relacionadas con la niñez y
              adolescencia.
            </p>
            <p>
              En el año 2008 fue reconocido con el premio “Juntos educar”
              otorgado por la vicaria episcopal de educación.
            </p>
          </div>
        </div>
      </div>
      <div className='acerca-nosotros-wave-container'>
        <img src={waveNosotros} alt='wave-acerca-nosotros'className='acerca-nosotros-wave'/>
      </div>
    </main>
  )
}

export default Nosotros
