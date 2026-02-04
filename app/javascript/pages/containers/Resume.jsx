const Resume = ({active}) => {
  return (
    <article className="resume active" data-page="resume">

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

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

      <section className="skill">

        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">JavaScript/TypeScript</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">React.js</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Ruby on Rails</h5>
              <data value="85">85%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%"}}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Python</h5>
              <data value="75">75%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "75%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">SQL/PostgreSQL</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Testing (RSpec/Capybara)</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>

          </li>

        </ul>

      </section>

    </article>
  )
}


export default Resume;