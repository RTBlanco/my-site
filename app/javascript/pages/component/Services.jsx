import IconDesign from "../../images/icon-design.svg"
import IconDev from "../../images/icon-dev.svg"
import IconApp from "../../images/icon-app.svg"
import IconPhoto from "../../images/icon-photo.svg"

const Services = () => {
  const serviceItems = [
    {
      title: "CAD Design",
      image: IconDesign,
      text: "The most modern and high-quality design"
    },
    {
      title: "Web Development",
      image: IconDev,
      text: "High-quality development of sites at the professional level."
    },
    {
      title: "Mobile Apps",
      image: IconApp,
      text: "Professional development of applications for iOS and Android."
    },
    {
      title: "Photography",
      image: IconPhoto,
      text: "I make high-quality photos of any category at a professional level."
    }
  ];

  const renderServiceItems = () => {
    return serviceItems.map((item, index) => {
      return ( 
        <li key={index} className="service-item">
          <div className="service-icon-box">
            <img src={item.image} alt="design icon" width="40" />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">{item.title}</h4>

            <p className="service-item-text">
              {item.text}
            </p>
          </div>

        </li>
      )
    })
  }

  return(
    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">
        {renderServiceItems()}
      </ul>

    </section>
  )
}

export default Services;