
import defaultImage from "../../../../assets/images/default.png"
import { Link } from "@inertiajs/react"
import { usePage } from "@inertiajs/react"

const Blogs = () => {

  const { blogs } = usePage().props
  
  const renderBlogs = () => {

    return blogs.map(blog => (
      <li key={blog.id} className="blog-post-item">
        <Link href={`/Blogs/${blog.id}`}>

          <figure className="blog-banner-box">
            <img src={blog.image || defaultImage} alt={blog.alt} loading="lazy" />
          </figure>

          <div className="blog-content">

            <div className="blog-meta">
              <p className="blog-category">{blog.category}</p>

              <span className="dot"></span>

              <time dateTime={blog.dateISO}>{blog.dateLabel}</time>
            </div>

            <h3 className="h3 blog-item-title">{blog.title}</h3>

            <p className="blog-text truncated-text">
              {blog.content}
            </p>

          </div>

        </Link>
      </li>
    ))
  }

  return (
    <article className="blog active" data-page="blog">

      <header>
        <h2 className="h2 article-title">Blogs</h2>
      </header>

      <section className="blog-posts">

        <ul className="blog-posts-list">

          {renderBlogs()}

        </ul>

      </section>

    </article>
  )
}

export default Blogs; 