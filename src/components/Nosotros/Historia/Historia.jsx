import './Historia.css'
import { Link } from 'react-router-dom'
import waveHistoria from '../../../assets/img/nosotros/wave-historia-hogar.png'

const Historia = () => {
  return (
    <main className="historia">
      <div className="info-historia-container">
        <div className="subcategories-historia-container">
          <Link to="/nosotros">
            <button className="nosotros-btn">Acerca de nosotros</button>
          </Link>
          <Link to="/william-morris">
            <button className="nosotros-btn">William C. Morris</button>
          </Link>
          <Link to="/historia">
            <button className=" historia-btn">Historia del hogar</button>
          </Link>
          <Link to="/financiamiento">
            <button className="nosotros-btn">Cómo nos financiamos</button>
          </Link>
        </div>
        <div className="info-text-historia-container">
          <div className="info-text-historia">
            <p>
              A fines del siglo XIX, Morris creó una red de escuelas evangélicas
              donde se educaron miles de niños no escolarizados de los barrios
              marginales de La Boca, Palermo o Maldonado. Los alumnos recibían
              enseñanza, alimentación, libros y ropa. Al ver la necesidad de los
              niños y niñas, decidió fundar El Hogar El Alba el 29 de mayo de
              1925. El mismo se encontraba en Palermo, un proyecto plasmado en
              el edificio de Charcas y Uriarte donde hoy funciona el Instituto
              de Menores Luis Agote. Luego de su fallecimiento, sus alumnos
              adultos ya graduados tomaron la posta en la administración de la
              Asociación y de la Biblioteca para hacerla perdurar en el tiempo
              en memoria de su fundador formando así Comisiones Directivas de
              generación en generación de sus alumnos y sus hijos. En 1947, las
              autoridades desalojaron el edificio de Palermo y llevaron por la
              fuerza a los chicos a un predio rural en Longchamps. El Hogar,
              hasta la actualidad sigue funcionando en el mismo lugar, en Juan
              B. Justo 803 y lleva 97 años acompañando a la niñez en riesgo.
            </p>
          </div>
        </div>
      </div>
      <div className="historia-wave-container">
        <img src={waveHistoria} alt="wave-historia" className="historia-wave" />
      </div>
    </main>
  )
}

export default Historia
