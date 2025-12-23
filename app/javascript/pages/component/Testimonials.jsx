
import Avatar from "../../images/avatar-1.png"
import Avatar2 from "../../images/avatar-2.png"
import Avatar3 from "../../images/avatar-3.png"
import Avatar4 from "../../images/avatar-4.png"

const Testimonials = () => {
  const testimonialsItems = [
    {
      name: "Daniel Lewis",
      avatar: Avatar,
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      name: "Jessica Miller",
      avatar: Avatar2,
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      name: "Emily Evans",
      avatar: Avatar3,
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      name: "Henry William",
      avatar: Avatar4,
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    }
  ];

  const renderTestimonials = () => {
    return testimonialsItems.map((item, index) => {
      return (
        <li key={index} className="testimonials-item">
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

  return(
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {renderTestimonials()}
      </ul>
    </section>
  )
}

export default Testimonials;