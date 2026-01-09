import { Link } from '@inertiajs/react'

const Navbar = ({pageState, setPageState}) => {
  const renderlinks = () => {
    const links = ["About", "Resume", "Portfolio", "Blogs", "Contact"]
    
    return links.map( (link, index) =>  (
      <li key={index} className="navbar-item">
        <Link
        // it will always default to about because pageState is About by default 
        // make it look at the url to define which should be active
          className={`navbar-link ${link == pageState ? "active" : "" }`}
          onClick={() => setPageState(link)}
          as="button"
          href={`/${link}`}
          data-nav-links
          >
            {link}
        </Link>
      </li>
    ))

  }


  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {renderlinks()}
      </ul>
    </nav>
  )
}

export default Navbar;