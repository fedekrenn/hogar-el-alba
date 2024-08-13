import './Modal.css'

const Modal = ({ modalState, isModalOpened, selectedImage }) => {
  const { title, id, url } = selectedImage

  if (!modalState) return null

  return (
    <div className="overlay">
      <div className="modal-container">
        <button className="close-modal" onClick={() => isModalOpened(false)}>
          X
        </button>
        <div className="modal-img-container">
          <img
            key={id}
            src={`/images/${url}`}
            alt={title}
            className="img-modal"
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
