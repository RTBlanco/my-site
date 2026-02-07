import { Form } from "@inertiajs/react";

const Contact = () => {
  return (
    <article className="contact active" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189183.57302216822!2d-71.1460478987327!3d42.318421811121326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1766785051477!5m2!1sen!2sus" 
            width="400" height="300" loading="lazy"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <Form action={"/contact"} method={"post"} className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="full_name" className="form-input" placeholder="Full name" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </Form>

      </section>

    </article>
  )
}

export default Contact;