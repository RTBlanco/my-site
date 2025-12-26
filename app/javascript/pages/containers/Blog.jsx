import blog1 from "../../images/blog-1.jpg"
import blog2 from "../../images/blog-2.jpg"
import blog3 from "../../images/blog-3.jpg"
import blog4 from "../../images/blog-4.jpg"
import blog5 from "../../images/blog-5.jpg"
import blog6 from "../../images/blog-6.jpg"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Design conferences in 2022",
      category: "Design",
      dateISO: "2022-02-23",
      dateLabel: "Feb 23, 2022",
      excerpt: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      image: blog1,
      alt: "Design conferences in 2022",
      link: "#",
    },
    {
      id: 2,
      title: "Best fonts every designer",
      category: "Design",
      dateISO: "2022-02-23",
      dateLabel: "Feb 23, 2022",
      excerpt: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      image: blog2,
      alt: "Best fonts every designer",
      link: "#",
    },
    {
      id: 3,
      title: "Design digest #80",
      category: "Design",
      dateISO: "2022-02-23",
      dateLabel: "Feb 23, 2022",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, quis nostrum exercitationem ullam corporis suscipit.",
      image: blog3,
      alt: "Design digest #80",
      link: "#",
    },
    {
      id: 4,
      title: "UI interactions of the week",
      category: "Design",
      dateISO: "2022-02-23",
      dateLabel: "Feb 23, 2022",
      excerpt:
        "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
      image: blog4,
      alt: "UI interactions of the week",
      link: "#",
    },
    {
      id: 5,
      title: "The forgotten art of spacing",
      category: "Design",
      dateISO: "2022-02-23",
      dateLabel: "Feb 23, 2022",
      excerpt:
        "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: blog5,
      alt: "The forgotten art of spacing",
      link: "#",
    },
    {
      id: 6,
      title: "Design digest #79",
      category: "Design",
      dateISO: "2022-02-23",
      dateLabel: "Feb 23, 2022",
      excerpt:
        "Optio cumque nihil impedit quo minus quod maxime placeat, velit esse cillum.",
      image: blog6,
      alt: "Design digest #79",
      link: "#",
    },
  ];

  const renderBlogs = () => {

    return blogPosts.map(blog => (
      <li key={blog.id} class="blog-post-item">
        <a href={blog.link}>

          <figure class="blog-banner-box">
            <img src={blog.image} alt={blog.alt} loading="lazy" />
          </figure>

          <div class="blog-content">

            <div class="blog-meta">
              <p class="blog-category">{blog.category}</p>

              <span class="dot"></span>

              <time datetime={blog.dateISO}>{blog.dateLabel}</time>
            </div>

            <h3 class="h3 blog-item-title">{blog.title}</h3>

            <p class="blog-text">
              {blog.excerpt}
            </p>

          </div>

        </a>
      </li>
    ))
  }


  return (
    <article class="blog active" data-page="blog">

      <header>
        <h2 class="h2 article-title">Blog</h2>
      </header>

      <section class="blog-posts">

        <ul class="blog-posts-list">

          {renderBlogs()}

        </ul>

      </section>

    </article>
  )
}

export default Blog; 