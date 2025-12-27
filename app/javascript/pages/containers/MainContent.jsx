import Navbar from "../component/Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blogs";
import Contact from "./Contact";
import { useState } from "react";

const MainContent = () => {
  const [pageState, setPageState] = useState("About")

  // could use a Link library but it would be overkill of a package
  // need to set up routes 
  
  const renderPageContent = () => {
    switch (pageState) {
    case 'About':
      return <About  />;
    case 'Resume':
      return <Resume />;
    case 'Portfolio':
      return <Portfolio />;
    case 'Blog':
      return <Blog />
    case "Contact": 
      return <Contact />
    default:
      return <About  />;
  }

  }
  return(
    <div className="main-content">
      <Navbar pageState={pageState} setPageState={setPageState} />
      {renderPageContent()}
    </div>
  )
}


export default MainContent;