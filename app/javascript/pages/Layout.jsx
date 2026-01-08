import SideMenu from "./containers/SideMenu"
import Navbar from "./component/Navbar";
import { useState } from "react";


export default function Layout({children}) {
  const [pageState, setPageState] = useState("About")

  let linkSplit = window.location.href.split("/")
  const currentRoute = linkSplit[linkSplit.length - 2]

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