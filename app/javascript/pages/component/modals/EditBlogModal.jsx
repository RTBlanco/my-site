import { useRef } from "react";

const EditBlogModal = () => {


  const modalRef = useRef(null)

  const toggelModal = () => {
    modalRef.current.classList.toggle("active")
    modalRef.current.firstChild.classList.toggle("active")
  }

  // const populateModal = (id) => {
  //   const testimonial = testimonialsItems.find(testimonial => id === testimonial.id)

  //   setModalState(testimonial)
  //   toggelModal()
  // }

  return(
    <div ref={modalRef} className="modal-container" data-modal-container>
      <div className="overlay" onClick={toggelModal} data-overlay></div>
      <section className="testimonials-modal">
        <button onClick={toggelModal} className="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        {/* <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={testimonial.avatar} alt="Daniel lewis" width="80" data-modal-img />
          </figure>

          <img src={IconQuote} alt="quote icon" />
        </div>

        <div className="modal-content">

          <h4 className="h3 modal-title" data-modal-title>{testimonial.name}</h4>

          <time dateTime="2021-06-14">{testimonial.date}</time>

          <div data-modal-text>
            <p>
              {testimonial.text}
            </p>
          </div>

        </div> */}
      </section>
    </div>
  )
}

export default EditBlogModal;