import project1 from "../../images/project-1.jpg"
import project2 from "../../images/project-2.png"
import project3 from "../../images/project-3.jpg"
import project4 from "../../images/project-4.png"
import project5 from "../../images/project-5.png"
import project6 from "../../images/project-6.png"
import project7 from "../../images/project-7.png"
import project8 from "../../images/project-8.jpg"
import project9 from "../../images/project-9.png"


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Finance",
      category: "web development",
      displayCategory: "Web development",
      image: project1,
      alt: "finance",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 2,
      title: "Orizon",
      category: "web development",
      displayCategory: "Web development",
      image: project2,
      alt: "orizon",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 3,
      title: "Fundo",
      category: "web design",
      displayCategory: "Web design",
      image: project3,
      alt: "fundo",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 4,
      title: "Brawlhalla",
      category: "applications",
      displayCategory: "Applications",
      image: project4,
      alt: "brawlhalla",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 5,
      title: "DSM.",
      category: "web design",
      displayCategory: "Web design",
      image: project5,
      alt: "dsm.",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 6,
      title: "MetaSpark",
      category: "web design",
      displayCategory: "Web design",
      image: project6,
      alt: "metaspark",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 7,
      title: "Summary",
      category: "web development",
      displayCategory: "Web development",
      image: project7,
      alt: "summary",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 8,
      title: "Task Manager",
      category: "applications",
      displayCategory: "Applications",
      image: project8,
      alt: "task manager",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
    {
      id: 9,
      title: "Arrival",
      category: "web development",
      displayCategory: "Web development",
      image: project9,
      alt: "arrival",
      icon: "eye-outline",
      active: true,
      link: "#",
    },
  ];

  const filterList = ["All", "Web design", "Applications", "Web development"]

  const renderFilerList = () => (
    filterList.map((filter, index) => (
      <li key={index} className="filter-item">
        <button className={filter === "All" ?`active` : ""} data-filter-btn>{filter}</button>
      </li>
    ))
  )

  const renderProjects = () => (
    projects.map(project => (
      <li key={project.id} className="project-item  active" data-filter-item data-category={project.category}>
        <a href={project.link}>

          <figure className="project-img">
            <div className="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img src={project.image} alt={project.alt} loading="lazy" />
          </figure>

          <h3 className="project-title">{project.title}</h3>

          <p className="project-category">{project.displayCategory}</p>

        </a>
      </li>
    ))
  )

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

          <ul className="select-list">

            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>

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