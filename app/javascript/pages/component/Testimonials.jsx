
import Avatar from "../../images/avatar-1.png"
import Avatar2 from "../../images/avatar-2.png"
import Avatar3 from "../../images/avatar-3.png"
import Avatar4 from "../../images/avatar-4.png"
import { useRef, useState } from "react"
import TestimonialModal from "./modals/TestimonialModal"

const Testimonials = () => {
  const [modalState, setModalState] = useState({
    id: 1,
    name: "Ian Iyengar",
    // avatar: Avatar,
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFEZlC8kEhb9g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1688857381924?e=1771459200&v=beta&t=52WF4CJgv5M0c19snrr5iXSn_aOAnuo4y5ZEpphLe3U",
    date: "July 31, 2025",
    text: "I had the pleasure of working alongside Ronny at KGA, where we both contributed to the internal BigTop platform. Ronny is not only a skilled developer, but also an incredibly thoughtful and collaborative teammate. Whether we were pair programming to troubleshoot complex issues or brainstorming ways to enhance the user experience for clinicians, Ronny brought sharp technical insight and a calm, solutions-focused approach to every challenge. We worked closely together on new Ruby on Rails features and consistently supported one another through debugging sessions and JavaScript enhancements. His ability to break down problems and his eagerness to share knowledge made a big impact on our team and helped raise the overall quality of our work. Anyone would be lucky to have Ronny on their dev team—he’s a reliable, curious, and collaborative engineer who genuinely makes those around him better."
  })

  const modalRef = useRef(null)

  const testimonialsItems = [
    {
      id: 1,
      name: "Ian Iyengar",
      // avatar: Avatar,
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFEZlC8kEhb9g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1688857381924?e=1771459200&v=beta&t=52WF4CJgv5M0c19snrr5iXSn_aOAnuo4y5ZEpphLe3U",
      date: "July 31, 2025",
      text: "I had the pleasure of working alongside Ronny at KGA, where we both contributed to the internal BigTop platform. Ronny is not only a skilled developer, but also an incredibly thoughtful and collaborative teammate. Whether we were pair programming to troubleshoot complex issues or brainstorming ways to enhance the user experience for clinicians, Ronny brought sharp technical insight and a calm, solutions-focused approach to every challenge. We worked closely together on new Ruby on Rails features and consistently supported one another through debugging sessions and JavaScript enhancements. His ability to break down problems and his eagerness to share knowledge made a big impact on our team and helped raise the overall quality of our work. Anyone would be lucky to have Ronny on their dev team—he’s a reliable, curious, and collaborative engineer who genuinely makes those around him better."
    },
  ];

  const toggleModal = () => {
    modalRef.current.classList.toggle("active")
    modalRef.current.firstChild.classList.toggle("active")
  }

  const populateModal = (id) => {
    const testimonial = testimonialsItems.find(testimonial => id === testimonial.id)

    setModalState(testimonial)
    toggleModal()
  }


  
  const renderTestimonials = () => {
    return testimonialsItems.map((item) => {
      return (
        <li key={item.id} onClick={() => populateModal(item.id)} className="testimonials-item">
          <div className="content-card" data-testimonials-item>

            <figure className="testimonials-avatar-box">
              <img src={item.avatar} alt={item.name} width="60" data-testimonials-avatar />
            </figure>

            <h4 className="h4 testimonials-item-title" data-testimonials-title>{item.name}</h4>

            <div className="testimonials-text" data-testimonials-text>
              <p>
                {item.text}
              </p>
            </div>
          </div>
        </li>
      )
    })
  }

  
  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {renderTestimonials()}
        </ul>
      </section>


      <TestimonialModal modalRef={modalRef} toggleModal={toggleModal} testimonial={modalState}/>
    </>
  )
}

export default Testimonials;