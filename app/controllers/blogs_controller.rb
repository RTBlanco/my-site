class BlogsController < ApplicationController
  def show
    blog = Blog.first


    render inertia: "containers/blogs/Blog", props: { blogData: blog.serialized }
  end

  def index
    # issue here in the future
    blogs = Blog.all.map do |blog|
      BlogSerializer.new(blog).as_json
    end
    render inertia: "containers/blogs/Blogs", props: { blogs: }
  end
end
