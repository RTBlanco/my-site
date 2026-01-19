import Table from "../../component/tables/Table"
import EditBlogModal from "../../component/modals/EditBlogModal";
import { usePage } from "@inertiajs/react";
import { useRef } from "react";

export default function Admin() {

  const { blogs } = usePage().props

  const projects = [
    {
      id: 1,
      title: "Finance Dashboard",
      description: "Analytics platform",
      category: "Web development",
      dateLabel: "Jan 12, 2026"
    },
  ];

  const modalRef = useRef(null)

  const toggleModal = () => {
    modalRef.current.classList.toggle("active")
    modalRef.current.firstChild.classList.toggle("active")
  }

  return (
    <article className="admin active" data-page="admin">

      <header>
        <h2 className="h2 article-title">Dashboard</h2>
      </header>

      <section className="dashboard">

        <Table name={"projects"} toggleModal={toggleModal}>
          {projects}
        </Table>
        <Table name={"Blogs"} toggleModal={toggleModal}>
          {blogs}
        </Table>
      </section>

      <EditBlogModal modalRef={modalRef} toggleModal={toggleModal}/>
    </article>
  )
}