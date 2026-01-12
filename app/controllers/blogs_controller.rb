class BlogsController < ApplicationController
  def show
    # render single blog
    blog = Blog.first


    render inertia: "containers/blogs/Blog", props: { blogData: blog }
  end

  def index

    # render all the blogs
    render inertia: "containers/blogs/Blogs"
  end
end
