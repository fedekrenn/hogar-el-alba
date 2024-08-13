import './Footer.css'
import { Link } from 'react-router-dom'
/* icons */
import wspIcon from '../../assets/icons/whatsapp-icon.svg'
import emailIcon from '../../assets/icons/email-icon.svg'
import mapIcon from '../../assets/icons/map-icon.svg'
import fbIcon from '../../assets/icons/facebook-icon.svg'
import igIcon from '../../assets/icons/instagram-icon.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <ul className='container'>
          <li className='footer__phone'>
            <Link
              to={
                'https://api.whatsapp.com/send?phone=+5491133103145&text=%C2%A1Hola%20Hogar%20El%20Alba!%20Quiero%20comunicarme%20con%20ustedes%20por%20el%20siguiente%20motivo:'
              }
              target='_blank'
              className='flex'
            >
              <img className='footer-icon' src={wspIcon} alt='Whatsapp Icon' />
              <p className='hide'>+54 9 11 3310-3145</p>
            </Link>
          </li>
          <li className='footer__email'>
            <Link to={'mailto:hogarelalba1925@gmail.com'} className='flex'>
              <img className='footer-icon' src={emailIcon} alt='Email Icon' />
              <p className='hide'>hogarelalba1925@gmail.com</p>
            </Link>
          </li>
          <li className='footer__address'>
            <Link to='https://goo.gl/maps/SUCCmmwMF9VKa8XP8' target='_blank' className='flex footer-address'>
              <img className='footer-icon' src={mapIcon} alt='Map Icon' />
              <p>Juan B. Justo 803, Longchamps, Buenos Aires, Argentina.</p>
            </Link>
          </li>
          <li className='footer__instagram'>
            <Link to={'https://www.instagram.com/hogarelalba/'} target='_blank' className='flex'>
              <img className='footer-icon' src={igIcon} alt='Instagram Icon' />
              <p className='hide' >@hogarelalba</p>
            </Link>
          </li>
          <li className='footer__facebook'>
            <Link
              to={
                'https://www.facebook.com/people/Hogar-El-Alba/100047750509164/'
              }
              target='_blank'
              className='flex'
            >
              <img className='footer-icon' src={fbIcon} alt='Facebook Icon' />
              <p className='hide'>Hogar El Alba</p>
            </Link>
          </li>
          <li className='footer__google'>
            <Link
              to={'https://www.google.com/search?q=hogar+el+alba'}
              target='_blank'
              className='flex'
            >
              <p className='google-comments'>Comentarios de google</p>
            </Link>
          </li>
        </ul>
    </footer>
  )
}

export default Footer
