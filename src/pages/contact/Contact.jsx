import Map from "../../components/map/Map";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>

      <p>Email: info@edumarketing.com</p>
      <p>Address: Las Palmas, Spain</p>

      {/* MAPA ARRIBA */}
      <Map />

      {/* FORMULARIO ABAJO */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your message" />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
