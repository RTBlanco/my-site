class BlogsController < ApplicationController
  def show
    blog = Blog.first


    render inertia: "containers/blogs/Blog", props: { blogData: blog.serialized }
  end

  def index
    blogs = Blog.all.map do |blog|
      blog.serialized.merge({ "image" => url_for(blog.image) })
    end

    render inertia: "containers/blogs/Blogs", props: { blogs: }
  end
end
