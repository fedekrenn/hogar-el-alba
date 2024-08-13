import './WilliamMorris.css'
import { Link } from 'react-router-dom'

const WilliamMorris = () => {
  return (
    <main className="william-morris">
      <div className="subcategories-wcm-container">
        <Link to="/nosotros">
          <button className="nosotros-btn">Acerca de nosotros</button>
        </Link>

        <Link to="/william-morris">
          <button className="wcm-btn">William C. Morris</button>
        </Link>

        <Link to="/historia">
          <button className="nosotros-btn">Historia del hogar</button>
        </Link>

        <Link to="/financiamiento">
          <button className="nosotros-btn">Cómo nos financiamos</button>
        </Link>
      </div>

      <div className="wcm-img-container"></div>
      <div className="info-text-wcm-container">
        <div className="info-text-wcm wcm-info">
          <span className="wcm-bold">
            William C. Morris fue un pedagogo, pastor anglicano, educador,
            filántropo y fundador de las “Escuelas e Institutos Filantrópicos
            Argentinos”, en Buenos Aires.
          </span>

          <p>
            Nacido en Soham, cerca de Cambridge, Inglaterra, el 16 de febrero de
            1864; William Morris emigró a Itapé, Paraguay con sus dos hermanos,
            su hermana y su padre en 1872 en un emprendimiento de colonos. Este
            proyecto fracasó y la familia Morris decidió moverse hacia el sur en
            una zona rural en la provincia de Santa Fe, Argentina, en 1873 con
            una carencia económica agobiante. Debido a las migraciones
            constantes y la pobreza, su educación escolar fue deficiente,
            estudió hasta tercer grado y a pesar de la escasa educación formal,
            el joven Morris procuró aprovechar las posibilidades que le ofrecían
            las bibliotecas fomentando la lectura para formarse solo.
          </p>
          <p>
            Ya adulto, William Morris se dirigió a Buenos Aires en 1886
            instalándose en la zona del puerto de La Boca donde trabajó como
            pintor de barcos y empleado en una oficina. Allí, en lo que él mismo
            describió como "el peor barrio de Buenos Aires", comenzó a
            congregarse en la Iglesia Metodista local. La Boca por ese entonces
            era un conglomerado plagado de conventillos, inmigrantes pobres,
            desilusionados y de niños que no tenían más perspectiva que la de
            mayor pobreza, promiscuidad y delincuencia. Este cuadro de terrible
            indigencia movilizó a Morris, que vio en La Boca un futuro de
            condenados sociales y excluidos, en favor de la infancia abandonada
            convirtiéndose en maestro y guía de niños y jóvenes.
          </p>
          <p>
            En 1888, abrió un humilde comedor para los niños de la calle. En ese
            mismo lugar abrió una escuela dominical de la que se ocupaba
            personalmente costeando de su bolsillo el salario de un joven
            maestro y encargándose él mismo de la instrucción religiosa. Las
            dificultades económicas para sostener la incipiente obra, sin
            embargo, lo obligaron a divisar nuevas formas de seguir adelante.
            Así, para 1895, Morris viajó a su Inglaterra natal para buscar el
            apoyo de accionistas que pudieran llegar a tener un interés en el
            país.
          </p>
          <p>
            Fundó la primera Escuela Evangélica Argentina en junio de 1898. En
            un año los 18 alumnos iniciales se habían multiplicado a 100. De ahí
            en más, la obra de Morris no paró de crecer exponencialmente. Con el
            lema “todo por Dios, mi Patria y mi deber”, él se enfocó en ayudar a
            todos aquellos que no eran alcanzados por la acción oficial. En 1913
            los beneficios de la obra llegaban a más de 5.000 niños y año a año
            fue incrementando la cantidad de alumnos y propiedades educativas.
            <span className="wcm-bold">
              El 29 de mayo de 1925 fundó el "Hogar El Alba" para niños
              huérfanos y desamparados.
            </span>
            Con algunos aportes estatales, pero principalmente de banqueros,
            inversionistas del ferrocarril y grandes capitalistas, en pocos años
            la cuestión se expandió para incluir, hacia 1930, unas 32
            instituciones.
          </p>
          <p>
            En 1932, la salud de William C Morris declinó y su enfermedad
            crecía. El 15 de septiembre del mismo año, falleció en su pueblo
            natal de Soham, a donde había ido de visita en busca de fondos para
            su causa.
          </p>
        </div>
      </div>
    </main>
  )
}

export default WilliamMorris
