import Navbar from "../component/Navbar";
import About from "./About";
import Resume from "./Resume";
import { useState } from "react";

const MainContent = () => {
  const [pageState, setPageState] = useState("About")

  // its going to be slow since everything is technicall rendering
  
  const renderPageContent = () => {
    switch (pageState) {
    case 'About':
      return <About  />;
    case 'Resume':
      return <Resume />;
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