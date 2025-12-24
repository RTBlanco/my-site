import Navbar from "../component/Navbar";
import About from "./About";
import Resume from "./Resume";
import { useState } from "react";

const MainContent = () => {
  const [pageState, setPageState] = useState("About")

  // its going to be slow since everything is technicall rendering 
  return(
    <div className="main-content">
      <Navbar pageState={pageState} setPageState={setPageState} />
      <About active={pageState == "About"}/>
      <Resume active={pageState == "Resume"}/>
    </div>
  )
}


export default MainContent;