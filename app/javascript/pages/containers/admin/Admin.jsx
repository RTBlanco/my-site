import Table from "../../component/tables/Table"
import Modal from "../../component/modals/Modal";
import { usePage, Link } from "@inertiajs/react";
import { useRef, useState } from "react";
import BlogForm from "../../component/BlogForm";
import ProjectForm from "../../component/ProjectForm";
import QrCodeForm from "../../component/QrCodeForm";



export default function Admin() {

  const { blogs, projects } = usePage().props
  const qrCodes = [
    {
      id: 1,
      path: '/1232',
      hits: 1
    }
  ]
  
  const [editBlog, setEditBlog] = useState({})
  const blogModalRef = useRef(null)
  const projectModalRef = useRef(null)
  const qrCodeRef = useRef(null)

  const toggleModal = (modalRef, newItem = true) => {
    if (newItem) {
      setEditBlog({})
    }
    modalRef.current.classList.toggle("active")
    modalRef.current.firstChild.classList.toggle("active")
  }

  const populateModal = (blog) => {
    if (blog) {
      setEditBlog(blog)
    } else {
      setEditBlog({})
    }

    toggleModal(blogModalRef, false)
  }


  return (
    <article className="admin active" data-page="admin">

      <header className="dashboard-header">
        <h2 className="h2 article-title">Dashboard</h2>
          <Link href="/" className="form-btn" as="button">
            <ion-icon name="home-outline"></ion-icon>
            <span>Home</span>
          </Link>
         <Link href="/admin/logout" method="post" className="form-btn" as="button" data-form-btn>
            <ion-icon name="log-out-outline"></ion-icon>
            <span>Logout</span>
          </Link>
      </header>

      <section className="dashboard">

        <Table 
          name={"projects"} 
          modalRef={projectModalRef} 
          toggleModal={toggleModal} 
          tableType={"project"} 
          headers={['Catergory', 'Year']}
        >

          {projects}
        </Table>

        <Table 
          name={"Blogs"}
          modalRef={blogModalRef}
          toggleModal={toggleModal} 
          tableType={"blogs"} 
          populateModal={populateModal} 
          headers={['Catergory', 'Year']}
        >

          {blogs}
        </Table>

        <Table 
          name={"QR Codes"} 
          modalRef={qrCodeRef} 
          toggleModal={toggleModal} 
          tableType={"qrCodes"} 
          populateModal={populateModal} 
          headers={Object.keys(qrCodes[0]).filter(item => item !== "id")}
        >
          
          {qrCodes}
          
        </Table>
      </section>

      <Modal modalRef={blogModalRef} toggleModal={toggleModal} populateModal={populateModal}>
        <BlogForm modalRef={blogModalRef} blog={editBlog} toggleModal={toggleModal}/>
      </Modal>

      <Modal modalRef={projectModalRef} toggleModal={toggleModal} >
        <ProjectForm modalRef={projectModalRef} toggleModal={toggleModal}/>
      </Modal>

      <Modal modalRef={qrCodeRef} toggleModal={toggleModal} >
        <QrCodeForm modalRef={qrCodeRef} toggleModal={toggleModal} />
      </Modal>
    </article>
  )
}