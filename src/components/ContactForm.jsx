import { useState } from "react";
import styled from "styled-components/macro";

const StyledInput = styled.input`
  background-color: white;
  border: 2px solid #343540;
  height: 2em;
  width: 100%;
  padding: 1em 0.5em;
  box-shadow: 0.25em 0.25em 0 0.1em #343540;

  :invalid,
  :focus,
  :active {
    outline: #343540;
  }

  ::placeholder {
    font-size: 0.75em;
    font-family: "Rock Salt", serif;
  }
`;

const StyledTextArea = styled.textarea`
  background-color: white;
  border: 2px solid #343540;
  resize: none;
  height: 10em;
  width: 100%;

  padding: 0.5em;
  box-shadow: 0.25em 0.25em 0 0.1em #343540;

  ::placeholder {
    font-size: 0.75em;
    font-family: "Rock Salt", serif;
    line-height: 15px;
  }

  :invalid,
  :focus,
  :active {
    outline: #343540;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  width: 50%;
  margin-left: auto;

  border: 2px solid white;
  overflow: hidden;
  position: relative;
  color: white;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5em;
  font-weight: 700;

  :after {
    background: white;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.5;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 10;
  }

  :hover {
    :after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
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
        gap: "1.5em",
        width: "75%",
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

      <StyledButton type="submit">
        <span style={{ zIndex: "21" }}>Send</span>
      </StyledButton>
    </form>
  );
};

export default ContactForm;
