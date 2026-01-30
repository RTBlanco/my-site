import { Form, useForm } from "@inertiajs/react";

const ProjectForm = ({modalRef, toggleModal}) => {

  // const {delete: destroy } = useForm({})
  // const newBlog =  Object.keys(blog).length === 0
  const newBlog = true

  // const handleDelete = (e, id) => {
  //   e.preventDefault()
  //   destroy(`/Blogs/${id}`,{
  //     preserveScroll: true
  //   })
  //   toggleModal()
  // }
  // console.log(newBlog)

  return (
    <section className="blog-form" style={ { "width" : "100% "} }>

      <h3 className="h3 form-title">{"Create Project"}</h3>

      <Form 
        action={"/Blogs"} 
        method={"post"} 
        className="Form" 
        data-form
        options={{
          preserveState: false,
          preserveScroll: true
        }}
        >

        <textarea defaultValue={""} name="project_url" className="form-input" placeholder="Project Url"  data-form-input></textarea>

        <div className="form-btns">
          <button onClick={(e) => toggleModal(modalRef)} className="form-btn" type="submit" data-form-btn>
            <ion-icon name="enter-outline"></ion-icon>
            <span>Save</span>
          </button>
        </div>

      </Form>

    </section>
  )
}

export default ProjectForm;