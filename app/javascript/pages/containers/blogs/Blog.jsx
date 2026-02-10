import defaultImage from "../../../../assets/images/default.png"
import { usePage } from "@inertiajs/react"

const Blog = () => {

  const { blog } = usePage().props
  
  return (
    
    <article className="blog active" data-page="blog">

      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">

        <div>
          <figure className="blog-banner-box">
            <img src={blog.image || defaultImage } alt="image" loading="lazy" />
          </figure>

            <div className="blog-content">

              <div className="blog-meta">
                <p className="blog-category">{blog.category}</p>

                <span className="dot"></span>

                <time dateTime={blog.dateISO}>{blog.dateLabel}</time>
              </div>

              <h3 className="h3 blog-item-title">{blog.title}</h3>

              <p className="blog-text">
                {blog.content}
              </p>

            </div>
          
        </div>

      </section>

    </article>

  )
}


export default Blog;