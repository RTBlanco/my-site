Rails.application.routes.draw do
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end



  resources :projects, path: :Portfolio do
    collection do
      post :add_all
    end
  end
  resources :blogs, path: :Blogs
  devise_for :admins, skip: :all


  # Redirect to localhost from 127.0.0.1 to use same IP address with Vite server
  constraints(host: "127.0.0.1") do
    get "(*path)", to: redirect { |params, req| "#{req.protocol}localhost:#{req.port}/#{params[:path]}" }
  end
  # root 'inertia_example#index'
  get 'inertia-example', to: 'inertia_example#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
  inertia "About" => "containers/About"
  inertia "Resume" => "containers/Resume"
  # inertia "Portfolio" => "containers/Portfolio"
  # inertia "Blogs" => "containers/blogs/Blogs"
  # inertia "Blog" => "containers/blogs/Blog"
  inertia "Contact" => "containers/Contact"

  post "contact" => "application#contact"

  scope :admin do
    # inertia "dashboard" => "containers/admin/Admin"
    get "/dashboard" => "admin#dashboard"
    get "login" => "admin#login"
    post "login" => "admin#sign_admin_in"
    post "logout" => "admin#logout"
  end

  root "application#index"
end
