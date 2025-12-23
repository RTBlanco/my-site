const Navbar = () => {
  const renderlinks = () => {
    const links = ["About", "Resume", "Portfolio", "Blog", "Contact"]
    
    return links.map( link =>  {
      <li className="navbar-item">
        <button className="navbar-link  active" data-nav-link>{link}</button>
      </li>
    })

  }


  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link  active" data-nav-link>About</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>Resume</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>Portfolio</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>Blog</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>Contact</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;