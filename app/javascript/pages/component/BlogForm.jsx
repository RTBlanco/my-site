import { Form, useForm } from "@inertiajs/react";
import TipTapEditor from "./TipTapEditor"
import { useState, useEffect } from "react";

const BlogForm = ({modalRef, blog, toggleModal}) => {
  const {delete: destroy } = useForm({})
  const newBlog = Object.keys(blog).length === 0
  const [content, setContent] = useState(blog.content || '')

  useEffect(() => {
    setContent(blog.content || '')
  }, [blog.id])

  const handleDelete = (e, id) => {
    e.preventDefault()
    destroy(`/Blogs/${id}`, { preserveScroll: true })
    toggleModal(modalRef)
  }

  return (
    <section className="blog-form">
      <h3 className="h3 form-title">{newBlog ? "Create Blog" : `Edit ${blog.title}`}</h3>
      <Form 
        action={newBlog ? "/Blogs" : `/Blogs/${blog.id}`} 
        method={newBlog ? "post" : "put"} 
        className="Form" 
        data-form
        options={{
          preserveState: false,
          preserveScroll: true
        }}
      >
        <div className="input-wrapper">
          <input type="file" name="[blog]image" className="form-input" placeholder="image" accept="image/*" data-form-input />
        </div>
        <div className="input-wrapper">
          <input defaultValue={blog.title} type="text" name="title" className="form-input" placeholder="Blog Title" data-form-input />
          <input defaultValue={blog.category} type="text" name="category" className="form-input" placeholder="Blog Category" data-form-input />
        </div>

        {/* Tiptap rich text editor */}
        <TipTapEditor value={content} onChange={setContent} />
        <input type="hidden" name="content" value={content} />

        <div className="form-btns">
          {newBlog ||
            <button type="button" onClick={(e) => handleDelete(e, blog.id)} className="form-btn" data-form-btn>
              <ion-icon name="trash-bin-outline"></ion-icon>
              <span>Delete</span>
            </button>
          }
          <button type="submit" onClick={(e) => toggleModal(modalRef, newBlog)} className="form-btn" data-form-btn>
            <ion-icon name="enter-outline"></ion-icon>
            <span>Save</span>
          </button>
        </div>
      </Form>
    </section>
  )
}

export default BlogForm;