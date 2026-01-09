import blog1 from "../../../images/blog-1.jpg"
import { useState } from "react"

const Blog = () => {
  const [editButton, setEditButton] = useState(true)


  const blog = {
    id: 1,
    title: "Design conferences in 2022",
    category: "Design",
    dateISO: "2022-02-23",
    dateLabel: "Feb 23, 2022",
    excerpt: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    image: blog1,
    alt: "Design conferences in 2022",
    link: "#",
  }

  const editBlog = () => {
    return(
      <div className="blog-content">

        <div className="blog-meta">
          <input className="blog-category" value={blog.category} />

          <span className="dot"></span>

          <time dateTime={blog.dateISO}>{blog.dateLabel}</time>
        </div>

        <input className="h3 blog-item-title" value={blog.title} />

        <textarea className="blog-text" name="" id="">
          {blog.excerpt}
        </textarea>

      </div>
    )
  }

  return (
    
    <article className="blog active" data-page="blog">

      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">

        <div>
          <button onClick={() => setEditButton(!editButton)}>edit</button>
          <figure className="blog-banner-box">
            <img src={blog.image} alt="image" loading="lazy" />
          </figure>

          { editButton ? (
              <div className="blog-content">

                <div className="blog-meta">
                  <p className="blog-category">{blog.category}</p>

                  <span className="dot"></span>

                  <time dateTime={blog.dateISO}>{blog.dateLabel}</time>
                </div>

                <h3 className="h3 blog-item-title">{blog.title}</h3>

                <p className="blog-text">
                  {blog.excerpt}
                </p>

              </div>
            ) : (
              editBlog()
            )
          }

        </div>

      </section>

    </article>

  )
}


export default Blog;