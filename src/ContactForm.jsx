import { useState } from "react";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setContactData({
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" />

        <button type="submit">Send Message</button>
      </form>

      <p> Votre message : </p>
      <p>
        {contactData.name} : {contactData.message}
      </p>
    </div>
  );
};

export default ContactForm;
