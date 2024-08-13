import './QuieroAyudar.css'
/* assets */
import quieroAyudarBanner from '../../assets/img/quiero-ayudar/grupo-de-amigos-sentados-juntos.webp'
import waveUp from '../../assets/img/quiero-ayudar/wave-top.png'
import waveDown from '../../assets/img/quiero-ayudar/wave-bottom.png'
import qr from '../../assets/img/quiero-ayudar/qr-code.png'
import line from '../../assets/img/quiero-ayudar/line.png'

import { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'

const QuieroAyudar = () => {
  const { changeCategory } = useContext(CategoryContext)

  return (
    <main className="quiero-ayudar" onLoad={() => changeCategory('')}>
      <section className="background-section">
        <img
          src={quieroAyudarBanner}
          alt="Niños del hogar abrazados mirando el horizonte"
        />
        <h1>¡Con tu donación, ayudanos a ayudar!</h1>
        <img src={waveUp} alt="" className="wave waves" />
      </section>
      <section className="qr-section">
        <div className="qr-section__info">
          <p>
            Tu ayuda es muy importante para poder seguir brindando a cada uno de
            los niños y niñas del Hogar El Alba, un espacio de contención donde
            están garantizados todos sus derechos. Hay muchas maneras de
            colaborar con nuestro hogar. Te invitamos a sumarte y trabajar
            juntos por una infancia respetada.
          </p>
          <h3>
            Si quisieras ayudar de forma monetaria te compartimos nuestros datos
            bancarios:
          </h3>
          <ul>
            <li>Escuelas e Institutos Filantrópicos Argentinos</li>
            <li>Banco Galicia- Sucursal 180 </li>
            <li>Cuenta Corriente en pesos 959-5 180-6</li>
            <li>CUIT 30-52916920-1</li>
            <li>CBU 0070180420000000959566</li>
          </ul>
          <ul>
            <li>MERCADO PAGO:</li>
            <li>CVU 0000003100034740171148</li>
            <li>Alias hogar.alba</li>
          </ul>
          <p className="qr-section__last-p">
            Una vez hecha la donación, por favor, enviar el comprobante a
            contable.elalba@gmail.com para su confirmación.
          </p>
        </div>
        <div className="qr-section__code">
          <h3>
            Escanea el código QR <span>con la App de Mercadopago</span> para
            colaborar
          </h3>
          <img src={qr} alt="QR" />
        </div>
      </section>
      <img src={waveDown} alt="" className="wave-2 waves" />
      <section className="donation-section">
        <div className="donation-section__title">
          <h3>Otras formas de colaborar</h3>
          <img src={line} alt="" />
        </div>
        <div className="donation-section__info">
          <div>
            <h5>Recibimos en forma permanente donaciones de:</h5>
            <ul>
              <li>Alimentos</li>
              <li>Medicamentos</li>
              <li>Ropa bebés, niños, adolescentes (en buen estado)</li>
              <li>Artículos de limpieza</li>
              <li>Artículos de perfumería</li>
              <li>Pañales P-M-G-XG</li>
              <li>Leche Sancor Bebé</li>
              <li>Artículos para bebés (en buen estado)</li>
            </ul>
            <span>
              Si querés realizarnos otro tipo de donaciones, te solicitamos nos
              contactes.
            </span>
          </div>
          <h4>¡Desde ya, agradecemos tu generosidad!</h4>
        </div>
      </section>
    </main>
  )
}

export default QuieroAyudar
