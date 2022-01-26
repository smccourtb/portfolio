import { useState } from "react";
import styled from "styled-components/macro";

const StyledInput = styled.input`
  background-color: transparent;
  //border-radius: 0.25em;
  border: 1px solid black;
  height: 2em;
  padding: 0.5em;
  box-shadow: 0.25em 0.25em 0 0.1em black;

  :invalid,
  :focus,
  :active {
    outline: black;
  }

  ::placeholder {
    font-size: 0.75em;
    font-family: "Rock Salt", serif;
  }
`;

const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid black;
  resize: none;
  height: 10em;
  padding: 0.5em;
  box-shadow: 0.25em 0.25em 0 0.1em black;

  ::placeholder {
    font-size: 0.75em;
    font-family: "Rock Salt", serif;
    line-height: 15px;
  }

  :invalid,
  :focus,
  :active {
    outline: black;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 0.25em;
  border: 1px solid black;
  height: 2em;
  width: 50%;
  margin-left: auto;
`;

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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
      name="contact"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">
        <StyledInput
          placeholder="Name"
          type="text"
          value={data.name}
          id="name"
          name="name"
          onChange={handleChange("name")}
        />
      </label>

      <label htmlFor="email">
        <StyledInput
          type="email"
          placeholder="Email"
          value={data.email}
          id="email"
          name="email"
          onChange={handleChange("email")}
        />
      </label>

      <label htmlFor="message">
        <StyledTextArea
          value={data.message}
          id="message"
          name="message"
          placeholder="Message"
          onChange={handleChange("message")}
        />
      </label>

      <StyledButton type="submit">Send</StyledButton>
    </form>
  );
};

export default ContactForm;
