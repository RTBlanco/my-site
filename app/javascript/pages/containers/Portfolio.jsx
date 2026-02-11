import { useState } from "react"
import { usePage } from "@inertiajs/react"
import githubLogo from "../../images/GitHub_Invertocat_White_Clearspace.svg"

const Portfolio = () => {

  const { projects } = usePage().props

  const listOptions = ["All", ...Object.keys(projects.reduce((prev, curr) => ({...prev, [curr.category]: curr }),{}))]

  const [selOption, setSelOption] = useState("All")


  const renderFilerList = (className="filter-item") => (
    listOptions.map((filter, index) => (
      <li key={index} className={className}>
        <button onClick={() => setSelOption(filter)} className={filter === selOption ?`active` : ""} data-filter-btn>{filter}</button>
      </li>
    ))
  )

  const handleListButton = (e) => {
    e.target.classList.toggle('active')
  }

  const renderProjects = () => {
    const filteredProjects =  projects.filter(item => selOption.toLowerCase() === "all" || item.category === selOption.toLowerCase())
   
    return filteredProjects.map(project => (
      <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
        <a href={project.link} target="_blank">

          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="link-outline"></ion-icon>
            </div>

            <img src={project.image_url || githubLogo } alt={project.title} loading="lazy" />
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

          <button className="filter-select" onClick={handleListButton} data-select>

            <div className="select-value" data-selecct-value>Select category</div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>

          </button>
          <ul className="select-list">

            {renderFilerList("select-item")}

          </ul>
        </div>


        <ul className="project-list">
          {renderProjects()}
        </ul>

      </section>

    </article>
  )
}

export default Portfolio;