import { Form, Link} from "@inertiajs/react";

export default function QrCodeForm() {
  return (
    <section className="blog-form" style={ { "width" : "100% "} }>

      <h3 className="h3 form-title">{"Create Qr Code"}</h3>

      <Form 
        action={"/qr_codes"} 
        method={"post"} 
        className="Form" 
        data-form
        options={{
          preserveState: false,
          preserveScroll: true
        }}
        >

        <textarea defaultValue={""} name="description" className="form-input" placeholder="Link description"  data-form-input></textarea>

        <div className="form-btns">
          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="enter-outline"></ion-icon>
            <span>Save</span>
          </button>
        </div>

      </Form>

    </section>
  )
}