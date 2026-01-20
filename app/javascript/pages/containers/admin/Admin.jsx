import Table from "../../component/tables/Table"
import Modal from "../../component/modals/Modal";
import { usePage } from "@inertiajs/react";
import { useRef } from "react";
import BlogForm from "../../component/BlogForm";

export default function Admin() {

  const { blogs } = usePage().props
  const {editBlog, setEditBlog} = {}

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

  const populateModal = (blog) => {
    if (blog) {
      setEditBlog(blog)
    } else {
      setEditBlog({})
    }
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
        <Table name={"Blogs"} toggleModal={toggleModal} populateModal={populateModal}>
          {blogs}
        </Table>
      </section>

      <Modal modalRef={modalRef} toggleModal={toggleModal} populateModal={}>
        <BlogForm blog={editBlog}/>
      </Modal>
    </article>
  )
}