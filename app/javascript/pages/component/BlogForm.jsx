import { Form } from "@inertiajs/react";

const BlogForm = ({blog}) => {
  const newBlog = () => (
    Object.keys(blog).length === 0
  )

  return (
    <section className="blog-form">

      <h3 className="h3 form-title">{newBlog ? "Create Blog" : `Edit ${blog.name}`}</h3>

      <Form action="/Blogs" method="post" className="Form" data-form>

        <div className="input-wrapper">
          <input type="file" name="image" className="form-input" placeholder="image" accept="image/*" data-form-input />
        </div>

        <div className="input-wrapper">
          <input type="text" name="title" className="form-input" placeholder="Blog Title" required data-form-input />
          <input type="text" name="category" className="form-input" placeholder="Blog Category" data-form-input />
        </div>

        <textarea name="content" className="form-input" placeholder="Content" required data-form-input></textarea>

        <button className="form-btn" type="submit" data-form-btn>
          <ion-icon name="enter-outline"></ion-icon>
          <span>Save</span>
        </button>

      </Form>

    </section>
  )
}

export default BlogForm;