import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_qznrj4i",
        "template_jop8d62",
        formData,
        "A6-dQ2jUrUdz2ncDP",
      )
      .then(() => {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      });
  }

  return (
    <section className="page">
      <h1>Contact Stillwater Shelter</h1>
      <p>
        Send a message if you need help, have questions, or want more
        information.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="How can we help?"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <Button text="Send Message" type="submit" />
      </form>

      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default Contact;
