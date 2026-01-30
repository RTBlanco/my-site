import { Form, Link} from "@inertiajs/react";

const ProjectForm = ({modalRef, toggleModal}) => {

  return (
    <section className="blog-form" style={ { "width" : "100% "} }>

      <h3 className="h3 form-title">{"Create Project"}</h3>

      <Form 
        action={"/Portfolio"} 
        method={"post"} 
        className="Form" 
        data-form
        options={{
          preserveState: false,
          preserveScroll: true
        }}
        >

        <textarea defaultValue={""} name="link" className="form-input" placeholder="Project Url"  data-form-input></textarea>

        <div className="form-btns">
          <button onClick={(e) => toggleModal(modalRef)} className="form-btn" type="submit" data-form-btn>
            <ion-icon name="enter-outline"></ion-icon>
            <span>Save</span>
          </button>

          <Link href="/Portfolio/add_all" method="post" as={"button"} className="form-btn">
            <ion-icon name="logo-github"></ion-icon>
            <span>Add all</span>
          </Link>
        </div>

      </Form>

    </section>
  )
}

export default ProjectForm;