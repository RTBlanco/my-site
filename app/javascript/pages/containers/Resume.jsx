import resumeFile from "./Resume.pdf"

const Resume = ({ active }) => {
  return (
    <article className="resume active" data-page="resume">

      <header className="resume-header">
        <h2 className="h2 article-title">Resume</h2>
        <a href={resumeFile} download="resume" className="form-btn">
          <ion-icon name="download-outline"></ion-icon>
        </a>
      </header>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Full-stack Software Developer</h4>

            <span>Dec 2021 — Jul 2025</span>

            <p className="timeline-text">
              Developed internal API systems for client scheduling, led architecture of secure messaging systems,
              and built client-facing APIs. Authored onboarding documentation and trained new developers on
              internal tools. Designed testing scenarios for features using RSpec.
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Software QA Engineer</h4>

            <span>Jan 2019 — Dec 2021</span>

            <p className="timeline-text">
              Collaborated in Agile testing teams performing manual UI testing on mobile and desktop platforms.
              Trained incoming QA team members and conducted functional and API notification testing to verify
              system reliability.
            </p>

          </li>

        </ol>

      </section>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Flatiron School</h4>

            <span>2021</span>

            <p className="timeline-text">
              Full Stack Web Development, Ruby on Rails, and JavaScript programming bootcamp
            </p>

          </li>

        </ol>

      </section>

      <section className="skill">

        <h3 className="h3 skills-title">Technical Skills</h3>

        <div className="skills-list content-card">

          <div className="skill-category">
            <h4 className="h4">Languages</h4>
            <p className="skill-items">
              JavaScript, TypeScript, Ruby, Python, C++, C#, SQL, HTML, CSS, SASS
            </p>
          </div>

          <div className="skill-category">
            <h4 className="h4">Frameworks & Libraries</h4>
            <p className="skill-items">
              React.js, React Native, Redux, Ruby on Rails, Stimulus JS, Sinatra, Flask, Bootstrap, Express
            </p>
          </div>

          <div className="skill-category">
            <h4 className="h4">Testing</h4>
            <p className="skill-items">
              RSpec, Capybara, Selenium
            </p>
          </div>

          <div className="skill-category">
            <h4 className="h4">Databases & ORMs</h4>
            <p className="skill-items">
              PostgreSQL, MongoDB, ActiveRecord, SQLAlchemy, Peewee
            </p>
          </div>

          <div className="skill-category">
            <h4 className="h4">Tools & Technologies</h4>
            <p className="skill-items">
              Git, Arduino, PyGame, Tkinter, RESTful APIs, Agile/Scrum
            </p>
          </div>

        </div>

      </section>

    </article>
  )
}


export default Resume;