class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  def index
    render inertia: "containers/About"
  end

  def about
    render inertia: "containers/About"
  end

  def resume
    render inertia: "containers/Resume"
  end

  def portfolio
    render inertia: "containers/Porfolio"
  end

  def dashboard
    blogs = Blog.all.map do |blog|
      blog.serialized
    end

    render inertia: "containers/admin/Admin", props: { blogs: }
  end
end
