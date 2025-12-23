import Navbar from "../component/Navbar";
import About from "./About";
import Resume from "./Resume";
import { useState } from "react";

const MainContent = () => {
  const [activeState, setActiveState] = useState(true)


  return(
    <div className="main-content">
      <Navbar />
      <About />
      <Resume />
    </div>
  )
}


export default MainContent;