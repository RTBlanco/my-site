import blog1 from "../../../images/blog-1.jpg"
import { usePage } from "@inertiajs/react"

const Blog = () => {

  const { blogData } = usePage().props
  
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

  
  console.log("Props -> ",blogData)
  return (
    
    <article className="blog active" data-page="blog">

      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">

        <div>
          <figure className="blog-banner-box">
            <img src={blog.image} alt="image" loading="lazy" />
          </figure>

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
          
        </div>

      </section>

    </article>

  )
}


export default Blog;