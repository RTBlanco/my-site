class BlogsController < ApplicationController

  def create
    blog = Blog.new(blog_params)
    blog.save
    redirect_to dashboard_path
  end

  def update
    blog = Blog.find(params[:id])

    blog.update(blog_params)

    redirect_to dashboard_path
  end

  def show
    blog = Blog.find(params[:id])

    render inertia: "containers/blogs/Blog", props: { blogData: BlogSerializer.new(blog).as_json }
  end

  def index
    # issue here in the future
    blogs = Blog.all.map do |blog|
      BlogSerializer.new(blog).as_json
    end
    render inertia: "containers/blogs/Blogs", props: { blogs: }
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :content, :category, :image)
  end
end
