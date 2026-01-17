class BlogsController < ApplicationController
  def show
    blog = BlogSerializer.new(Blog.first).as_json


    render inertia: "containers/blogs/Blog", props: { blogData: blog}
  end

  def index
    # issue here in the future
    blogs = Blog.all.map do |blog|
      BlogSerializer.new(blog).as_json
    end
    render inertia: "containers/blogs/Blogs", props: { blogs: }
  end
end
