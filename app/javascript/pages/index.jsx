// import cs from './index.module.css'
import SideMenu from "./containers/SideMenu"
import MainContent from "./containers/MainContent"

export default function index() {
  return (
    <main>
      <SideMenu/>
      <MainContent />
    </main>
  )
}
