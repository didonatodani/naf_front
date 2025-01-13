import axios from "axios";
import { useActionState } from "react";
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
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      console.log("this is the data sent", response.data);
    } catch (error) {
      console.log("error posting data", error.config.message);
    }
  }

  return (
    <section>
      <form action={formAction}>
        <div className="form-div">
          <label htmlFor="fullName">Full name:</label>
          <input type="text" name="fullName" id="fullName" />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-div">
          <label htmlFor="phone">Phone:</label>
          <input type="number" name="phone" id="phone" />
        </div>
        <div className="form-div">
          <label htmlFor="message">Message:</label>
          <input type="text" name="message" id="message" />
        </div>
        <button type="submit" disabled={isPending}>
          submit
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
