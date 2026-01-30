const Modal = ({modalRef, toggleModal, children}) => {

  return(
    <div ref={modalRef} className="modal-container" data-modal-container>
      <div className="overlay" onClick={(e) => toggleModal(modalRef)} data-overlay></div>
      <section className="testimonials-modal">
        <button onClick={(e) => toggleModal(modalRef)} className="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        {children}

      </section>
    </div>
  )
}

export default Modal;