import Services from "../component/Services"
import Testimonials from "../component/Testimonials"
import Clients from "../component/Clients"

const About = ({active}) => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I’m a Full-stack Software Engineer with over four years of experience creating reliable, scalable web applications 
          using Ruby on Rails, React.js, and Python. I enjoy building tools and features that make life easier for users, 
          whether it’s designing an API that saves time, crafting a smooth, intuitive interface, or improving performance 
          behind the scenes. I’ve worked across the entire development lifecycle in Agile teams, and I’m proud of writing 
          clean, maintainable code and continuously learning new technologies to deliver better solutions.
        </p>
      </section>

      <Services />
      <Testimonials />
      <Clients />
    </article>
  )
}

export default About