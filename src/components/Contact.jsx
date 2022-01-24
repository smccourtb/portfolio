import { Container, Header } from "../styles/shared-styles";
import Arrow from "../assets/images/arrow.svg";
import styled from "styled-components";
import { useState } from "react";

const ArrowImg = styled.img`
  transform: rotate(90deg);
  height: 100%;
`;

const ContactButton = styled.button`
  background: transparent;
  border-radius: 0.25em;
  padding: 0.5em;
  //height: 25%;
  align-self: flex-end;
  //margin-bottom: 0.5em;
  font-size: 1em;
`;

const Footer = styled.footer`
  background-color: white;
  height: 20%;
  margin-top: auto;
  width: 100%;
  filter: invert(100%);
`;
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Contact = () => {
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
    <Container column fullPage padding>
      <Header>Contact Me</Header>
      <p>If you'd like to reach out, I'd love to hear from you!</p>
      <div style={{ height: "5em", display: "flex", gap: "1em" }}>
        <ArrowImg src={Arrow} />
        <ContactButton>Hire Me</ContactButton>
      </div>
      <p style={{ position: "absolute", bottom: "100px" }}>HI THERE</p>
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
          id={"name"}
          onChange={handleChange("name")}
        />
        <label htmlFor="email">Email</label>

        <input
          type="email"
          value={data.email}
          id={"email"}
          onChange={handleChange("email")}
        />
        <label htmlFor="message">Message</label>

        <textarea
          value={data.message}
          id={"message"}
          onChange={handleChange("message")}
        />
        <button type="submit">Send</button>
      </form>
      <Footer />
    </Container>
  );
};
