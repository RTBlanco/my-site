class BlogsController < ApplicationController
  before_action :authenticate_admin, only: [:create, :update, :destroy]
  before_action :set_blog, only: [:update, :destroy, :show]

  def create
    blog = Blog.new(blog_params)
    if blog.valid?
      blog.save
      redirect_to dashboard_path
    else
      redirect_to dashboard_path, inertia: { errors: blog.errors }
    end
  end

  def update
    @blog.assign_attributes(blog_params)

    if @blog.valid?
      @blog.save
      redirect_to dashboard_path
    else
      redirect_to dashboard_path, inertia: { errors: @blog.errors }
    end
  end

  def destroy
    @blog.delete
    redirect_to dashboard_path
  end

  def show
    render inertia: "containers/blogs/Blog", props: { blog: BlogSerializer.new(@blog).as_json }
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

  def set_blog
    @blog = Blog.find(params[:id])
  end
end
