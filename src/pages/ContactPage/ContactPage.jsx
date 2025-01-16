// ADD ERROR HANDLING!

import "./ContactPage.css";
import newtworkImg from "../../assets/network.jpg";

import axios from "axios";
import { useActionState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function ContactPage() {
  const emptyState = {
    fullName: "",
    email: "",
    phone: 0,
    message: "",
  };

  const [formState, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      try {
        const response = await handleSubmit({
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          phoneNumber: formData.get("phone"),
          message: formData.get("message"),
        });
        if (response?.error) {
          throw new Error(
            `Response throws an error: ${response.error.message}`
          );
        }

        return emptyState;
      } catch (error) {
        console.log(error);
      }
    }
  );

  async function handleSubmit(formData) {
    try {
      const response = await axios.post(`${API_URL}/contact`, formData);
      console.log("this is the data sent", response.data);
    } catch (error) {
      console.log("error posting data", error.config.message);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="contact-section section">
      <div className="contact-content-container">
        <div className="left-contact-div">
          <img src={newtworkImg} alt="newtwork image" className="contact-img" />
          <p>info@naf-group.com</p>
          <p>34234234324</p>
          <a
            href="https://www.linkedin.com/company/naf-ar/posts/?feedView=all"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
        <div className="form-container">
          <h2>Contact us</h2>
          <p>We'll get in touch as soon as possible.</p>
          <form action={formAction} className="contact-form">
            <div className="form-div">
              <label htmlFor="fullName">Full name</label>
              <input type="text" name="fullName" id="fullName" />
            </div>
            <div className="form-div">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-div">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" id="phone" />
            </div>
            <div className="form-div">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" disabled={isPending} className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
