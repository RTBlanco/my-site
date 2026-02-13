
# My Personal Site

Personal portfolio + CMS built with **Ruby on Rails**, modern frontend tooling, and containerized deployment.
This project powers a dynamic personal website showcasing projects, content, and embedded systems work. The main reason that i created this was actually i wanted a place to not only showcase all projects and skills but a place where i can post blogs about what im currently working on and or new things that i find interesting



## ✨ Overview

`my-site` is a full-stack Rails application designed to act as both:

* A personal website
* A project showcase
* A lightweight content platform

The app combines traditional Rails conventions with modern tooling like Vite and Docker to create a fast, production-ready developer experience.



## 🧱 Tech Stack

### Backend

* Ruby on Rails
* ActiveRecord / PostgreSQL

### Frontend

* Vite
* JavaScript / TypeScript
* React.js
* Inertia.js
* HTML + CSS

### DevOps / Infrastructure

* Docker + Dev Containers
* GitHub Actions

> Repo includes Dockerfile, `.devcontainer`, Vite config, and Kamal setup for deployment workflows. ([GitHub][1])

---

## ⚙️ Requirements

* Ruby (see `.ruby-version`)
* Node.js (used by Vite)
* PostgreSQL
* Docker (optional but recommended)

---

## 🛠️ Local Development Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/RTBlanco/my-site.git
cd my-site
```

---

### 2️⃣ Install Dependencies

```bash
bundle install
npm install
```

---

### 3️⃣ Setup Database

```bash
bin/rails db:create
bin/rails db:migrate
```

---

### 4️⃣ Run Dev Server

```bash
bin/dev
```

This will start:

* Rails server
* Vite frontend build
* Any background processes defined in `Procfile.dev`.

---

## 🐳 Dev Container (Optional)

If using VSCode Dev Containers:

1. Open repo in VSCode
2. Reopen in Container
3. Dependencies will install automatically

This provides a consistent environment for development.

## 🎨 Design Inspiration & Credits

This project’s visual foundation was originally inspired by work from [@codewithsadee](https://github.com/codewithsadee).
The initial layout and design ideas came from their open-source project, which helped me kickstart the look and feel of this site.

While the original source began as a static HTML/CSS implementation, this repository represents a complete rebuild. The application has been re-architected into a full Ruby on Rails + React stack, with new structure, features, and functionality tailored to my own workflow and goals.

I’m incredibly grateful for the inspiration and wanted to give proper credit to the original creator:

Original design & inspiration: [@codewithsadee](https://github.com/codewithsadee)

Original source: [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)

If you’re learning frontend design, I highly recommend checking out their work.