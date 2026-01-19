const BlogForm = () => {
  let blog;
  return (
    <section className="blog-form">

      <h3 className="h3 form-title">{newBlog ? "Create Blog" : `Edit ${blog.name}`}</h3>

      <form action="#" className="form" data-form>

        <div className="input-wrapper">
          <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

          <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
        </div>

        <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

        <button className="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Save</span>
        </button>

      </form>

    </section>
  )
}

export default BlogForm;