import SideMenu from "./containers/SideMenu"
import Navbar from "./component/Navbar";
import About from "./containers/About";
import Resume from "./containers/Resume";
import Portfolio from "./containers/Portfolio";
import Blogs from "./containers/blogs/Blogs";
import Contact from "./containers/Contact";
import { useState } from "react";


export default function Layout({children}) {
  const [pageState, setPageState] = useState("About")

  let linkSplit = window.location.href.split("/")
  const currentRoute = linkSplit[linkSplit.length - 2]

  const renderPageContent = () => {
      switch (pageState) {
      case 'About':
        return <About  />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blogs />
      case "Contact": 
        return <Contact />
      default:
        return <About  />;
    }
  }

  
  return (
    <main>
      <SideMenu/>
      <div className="main-content">
        {currentRoute === "admin" || <Navbar pageState={pageState} setPageState={setPageState} />}
        {children}
      </div>
    </main>
  )
}