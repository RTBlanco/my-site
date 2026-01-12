class BlogsController < ApplicationController
  def show
    # render single blog
    blog = Blog.first


    render inertia: "containers/blogs/Blog", props: { blogData: blog.serialized }
  end

  def index
    blogs = Blog.all.map do |blog|
      blog.serialized
    end

    # render all the blogs
    render inertia: "containers/blogs/Blogs", props: { blogs: }
  end
end
