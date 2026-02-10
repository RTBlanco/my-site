import Table from "../../component/tables/Table"
import Modal from "../../component/modals/Modal";
import { usePage, Link } from "@inertiajs/react";
import { useRef, useState } from "react";
import BlogForm from "../../component/BlogForm";
import ProjectForm from "../../component/ProjectForm";

export default function Admin() {

  const { blogs, projects } = usePage().props
  const [editBlog, setEditBlog] = useState({})
  const blogModalRef = useRef(null)
  const projectModalRef = useRef(null)

  const toggleModal = (modalRef, newItem = true) => {
    console.log(modalRef)
    if (newItem) {
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

    toggleModal(blogModalRef, false)
  }

  return (
    <article className="admin active" data-page="admin">

      <header className="dashboard-header">
        <h2 className="h2 article-title">Dashboard</h2>
         <Link href="/admin/logout" method="post" className="form-btn" as="button" data-form-btn>
            <ion-icon name="log-out-outline"></ion-icon>
            <span>Logout</span>
          </Link>
      </header>

      <section className="dashboard">

        <Table name={"projects"} modalRef={projectModalRef} toggleModal={toggleModal} isProject={true}>
          {projects}
        </Table>
        <Table name={"Blogs"} modalRef={blogModalRef} toggleModal={toggleModal} isProject={false} populateModal={populateModal}>
          {blogs}
        </Table>
      </section>

      <Modal modalRef={blogModalRef} toggleModal={toggleModal} populateModal={populateModal}>
        <BlogForm modalRef={blogModalRef} blog={editBlog} toggleModal={toggleModal}/>
      </Modal>

      <Modal modalRef={projectModalRef} toggleModal={toggleModal} >
        <ProjectForm modalRef={projectModalRef} toggleModal={toggleModal}/>
      </Modal>
    </article>
  )
}