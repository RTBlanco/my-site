const Modal = ({modalRef, toggleModal, children}) => {

  return(
    <div ref={modalRef} className="modal-container" data-modal-container>
      <div className="overlay" onClick={toggleModal} data-overlay></div>
      <section className="testimonials-modal">
        <button onClick={toggleModal} className="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        {children}

      </section>
    </div>
  )
}

export default Modal;