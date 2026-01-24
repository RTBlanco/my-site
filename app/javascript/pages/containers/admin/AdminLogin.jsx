import { Form } from "@inertiajs/react";

const AdminLogin = () => {
  return(
    <article className="admin-login active" data-page="admin-login">

      <header>
        <h2 className="h2 article-title">Login</h2>
      </header>

      <section className="contact-form">

        <Form action="/admins/sign_in" method="POST" className="form" data-form>

          <div className="input-wrapper">
            <input type="email" name="email" className="form-input" placeholder="Email" required data-form-input />

            <input type="password" name="password" className="form-input" placeholder="Password" required data-form-input />
          </div>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="enter-outline"></ion-icon>
            <span>Login</span>
          </button>

        </Form>

      </section>

    </article>
  )
}


export default AdminLogin;