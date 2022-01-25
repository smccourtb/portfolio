import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      name="contact"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={data.name}
        id="name"
        name="name"
        onChange={handleChange("name")}
      />
      <label htmlFor="email">Email</label>

      <input
        type="email"
        value={data.email}
        id="email"
        name="email"
        onChange={handleChange("email")}
      />
      <label htmlFor="message">Message</label>

      <textarea
        value={data.message}
        id="message"
        name="message"
        onChange={handleChange("message")}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
