class BlogsController < ApplicationController
  def show
    # render single blog
    blog = Blog.first


    render inertia: "containers/blogs/Blog", props: { blogData: blog }
  end

  def index
    blogs = Blog.all.map do |blog|
      {
        id: blog.id,
        title: blog.title,
        category: blog.category,
        dateISO: blog.created_at.strftime("%F"),
        dateLabel: blog.created_at.strftime("%b %d, %Y"),
        content: blog.content,
        image: blog.image
      }
    end

    # render all the blogs
    render inertia: "containers/blogs/Blogs", props: { blogs: }
  end
end
