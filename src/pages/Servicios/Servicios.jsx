import './Servicios.css'
import { useContext, useState } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
/* componentes */
import Modal from '../../components/Modal/Modal'
/* json */
import gallery from '../../utils/galeria.json'

const Servicios = () => {
  const { changeCategory } = useContext(CategoryContext)

  /* Modal */
  const [modalState, setModalState] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main className='servicios' onLoad={() => changeCategory('servicios')}>
      <div className='modal-servicios-container'>
        {selectedImage && (
          <Modal
            modalState={modalState}
            isModalOpened={setModalState}
            selectedImage={selectedImage}
          />
        )}
      </div>

      <h1 className='servicios-title'>Servicios que ofrecemos</h1>

      <div className='gallery-container'>
        <div className='gallery-images'>
          {gallery.map((image) => {
            const { id, title, url } = image

            console.log(image)

            return (
              <div
                className='card-image-container'
                key={id}
                onClick={
                  () => {
                    setModalState(!modalState)
                    setSelectedImage(image)
                  } // Se actualiza el estado de la imagen seleccionad porque recibe el parametro del mapeo de cada img
                }
              >
                <div className='image-container'>
                  <img
                    src={`/images/${url}`}
                    alt={title}
                  />
                </div>
                <div className='caption'>{title}</div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Servicios
