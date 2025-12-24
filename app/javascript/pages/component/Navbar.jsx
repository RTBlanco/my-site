const Navbar = ({pageState, setPageState}) => {
  const renderlinks = () => {
    const links = ["About", "Resume", "Portfolio", "Blog", "Contact"]
    
    return links.map( link =>  (
      <li className="navbar-item">
        <button 
          className={`navbar-link ${link == pageState ? "active" : "" }`} 
          onClick={() => setPageState(link)} 
          data-nav-link>
            {link}
          </button>
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