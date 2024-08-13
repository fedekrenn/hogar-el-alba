import './Proyectos.css'
import { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import background from '../../assets/img/proyectos/plaza.webp'
import proyects from '../../utils/proyectos.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Proyectos = () => {
  const { changeCategory } = useContext(CategoryContext)

  const params = {
    modules: [Pagination, Navigation, A11y, Autoplay],
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
      clickable: true
    },
    navigation: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      450: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    },
    initialSlide: 2,
    loop: true,
    slidesPerGroup: 1,
    autoplay: {
      delay: 6000
    }
  }

  return (
    <main className='proyectos' onLoad={() => changeCategory('proyectos')}>
      <section>
        <img src={background} alt='Proyecto Amparo - Hogar El Alba' />
      </section>
      <section>
        <h1>Nuestros Proyectos</h1>
        <Swiper className='card-container' {...params}>
          {proyects.map(({ id, title, description, url, bgColor }) => {
            return (
              <SwiperSlide key={id}>
                <div style={{ background: bgColor }} className='proyect-card'>
                  <div className='title'>
                    <img
                      src={`/images/${url}`}
                      alt={title}
                    />
                  </div>
                  <p>{description}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </main>
  )
}

export default Proyectos
