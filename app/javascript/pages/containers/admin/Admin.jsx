import Table from "../../component/tables/Table"
import Modal from "../../component/modals/Modal";
import { usePage, Link } from "@inertiajs/react";
import { useRef, useState } from "react";
import BlogForm from "../../component/BlogForm";

export default function Admin() {

  const { blogs } = usePage().props
  const [editBlog, setEditBlog] = useState({})

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

  const toggleModal = (newBlog = true) => {
    if (newBlog) {
      setEditBlog({})
    }
    modalRef.current.classList.toggle("active")
    modalRef.current.firstChild.classList.toggle("active")
  }

  const populateModal = (blog) => {
    if (blog) {
      console.log('testing ')
      setEditBlog(blog)
    } else {
      console.log('testing 2')
      setEditBlog({})
    }

    toggleModal(false)
  }

  return (
    <article className="admin active" data-page="admin">

      <header className="dashboard-header">
        <h2 className="h2 article-title">Dashboard</h2>
         <Link href="/logout" method="post" className="form-btn" as="button" data-form-btn>
            <ion-icon name="log-out-outline"></ion-icon>
            <span>Logout</span>
          </Link>
      </header>

      <section className="dashboard">

        <Table name={"projects"} toggleModal={toggleModal}>
          {projects}
        </Table>
        <Table name={"Blogs"} toggleModal={toggleModal} populateModal={populateModal}>
          {blogs}
        </Table>
      </section>

      <Modal modalRef={modalRef} toggleModal={toggleModal} populateModal={populateModal}>
        <BlogForm blog={editBlog} toggleModal={toggleModal}/>
      </Modal>
    </article>
  )
}