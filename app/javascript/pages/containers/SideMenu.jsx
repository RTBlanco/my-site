import myAvatar from "../../images/MyAvatar.png"
import { useRef } from "react"

const SideMenu = () => {

  // data should look somthing like this
  const userInfo = {
    name: "Ronny Toribio Blanco", // looks bit weird being to long 
    title: "FullStack Software Engineer", // this doesnt fit correctly on the screen when viewed on tablets let update it
    birthday: "10/20/1997",
    location: "Boston, Mass, USA",
    avatar: myAvatar, // the avatar rarely changes so no need to save 
    contact: {
      email: "ronnytoribio1@hotmail.com",
      phone: "12133522795" // dont use phone number
    }
  }

  const sidebar = useRef(null)

  const elementToggleFunc = (elem) => { 
    elem.classList.toggle("active"); 
  }

  return (
    <aside className="sidebar" data-sidebar ref={sidebar}>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src={userInfo.avatar} alt={userInfo.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={userInfo.name}>{userInfo.name}</h1>

          <p className="title">{userInfo.title}</p>
        </div>

        <button className="info_more-btn" onClick={() => elementToggleFunc(sidebar.current)} data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${userInfo.contact.email}`} className="contact-link">{userInfo.contact.email}</a>
            </div>

          </li>

          {/* not useing Phone number */}
          {/* <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">+1 (213) 352-2795</a>
            </div>

          </li> */}

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">{userInfo.birthday}</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{userInfo.location}</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://www.linkedin.com/in/ronnytoribio/" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://x.com/R_T_Blanco" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/rtblanco" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
  )
}

export default SideMenu;