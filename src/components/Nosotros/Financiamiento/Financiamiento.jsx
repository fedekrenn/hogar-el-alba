import './Financiamiento.css'
import { Link } from 'react-router-dom'
/* imágenes */
import waveFinanciamiento from '../../../assets/img/nosotros/wave-financiamiento.png'

const Financiamiento = () => {
  return (
    <main className="financiamiento">
      <div className="info-financiamiento-container">
        <div className="subcategories-financiamiento-container">
          <Link to="/nosotros">
            <button className="nosotros-btn">Acerca de nosotros</button>
          </Link>

          <Link to="/william-morris">
            <button className="nosotros-btn">William C. Morris</button>
          </Link>

          <Link to="/historia">
            <button className="nosotros-btn">Historia del hogar</button>
          </Link>

          <Link to="/financiamiento">
            <button className="nosotros-btn financiamiento-btn">
              Cómo nos financiamos
            </button>
          </Link>
        </div>
        <div className="info-text-financiamiento-container">
          <div className="info-text-financiamiento">
            <p>
              El hogar El Alba tiene diversas fuentes de financiamiento.
              Mantiene convenios con organismos nacionales y provinciales. Por
              otra parte, se llevan adelante micro emprendimientos relacionados
              con la producción de artículos de campo y panadería.
            </p>
            <p>
              Se alquilan espacios para eventos recreativos, sociales y
              deportivos.
            </p>
            <p>
              Se reciben donaciones de todo tipo desde distintos sectores de la
              comunidad, y también a través del “círculo de amigos”, con aporte
              de dinero periódico de personas o familias.
            </p>
          </div>
        </div>
      </div>

      <div className="financiamiento-wave-container">
        <img
          src={waveFinanciamiento}
          alt="wave-financiamiento"
          className="financiamiento-wave"
        />
      </div>
    </main>
  )
}

export default Financiamiento
