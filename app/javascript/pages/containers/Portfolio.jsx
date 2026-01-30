import { useState } from "react"
import { usePage } from "@inertiajs/react"

const Portfolio = () => {

  const { projects } = usePage().props

  // dynamically gather all the categorys

  const listOptions = ["All", "CAD", "Coding"]

  const [selOption, setSelOption] = useState("All")


  const renderFilerList = () => (
    listOptions.map((filter, index) => (
      <li key={index} className="filter-item">
        <button onClick={() => setSelOption(filter)} className={filter === selOption ?`active` : ""} data-filter-btn>{filter}</button>
      </li>
    ))
  )

  const renderProjects = () => {
    const filteredProjects =  projects.filter(item => selOption.toLowerCase() === "all" || item.category === selOption.toLowerCase())
   
    return filteredProjects.map(project => (
      <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
        <a href={project.link} target="_blank">

          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="link-outline"></ion-icon>
            </div>

            <img src={project.image_url} alt={project.title} loading="lazy" />
          </figure>

          <h3 className="project-title">{project.title}</h3>

          <p className="project-category">{project.category}</p>

        </a>
      </li>
    ))
  }

  return (
    <article className="portfolio active" data-page="portfolio">

      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">

        <ul className="filter-list">

          {renderFilerList()}

        </ul>

        <div className="filter-select-box">

          <button className="filter-select" data-select>

            <div className="select-value" data-selecct-value>Select category</div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>

          </button>
        </div>

        <ul className="project-list">
          {renderProjects()}
        </ul>

      </section>

    </article>
  )
}

export default Portfolio;