import { Form } from "@inertiajs/react";

const BlogForm = ({blog, toggleModal}) => {

  const newBlog = () => {
    return Object.keys(blog).length === 0
  }

  console.log(newBlog())

  return (
    <section className="blog-form">

      <h3 className="h3 form-title">{newBlog() ? "Create Blog" : `Edit ${blog.title}`}</h3>

      <Form action={newBlog() ? "/Blogs" : `/Blogs/${blog.id}`} method={newBlog() ? "post" : "patch"} className="Form" data-form>

        <div className="input-wrapper">
          <input type="file" name="image" className="form-input" placeholder="image" accept="image/*" data-form-input />
        </div>

        <div className="input-wrapper">
          <input defaultValue={blog.title} type="text" name="title" className="form-input" placeholder="Blog Title" required data-form-input />
          <input defaultValue={blog.category} type="text" name="category" className="form-input" placeholder="Blog Category" data-form-input />
        </div>

        <textarea defaultValue={blog.content} name="content" className="form-input" placeholder="Content" required data-form-input></textarea>

        <button onClick={toggleModal} className="form-btn" type="submit" data-form-btn>
          <ion-icon name="enter-outline"></ion-icon>
          <span>Save</span>
        </button>

      </Form>

    </section>
  )
}

export default BlogForm;