import { Container, Header } from "../styles/shared-styles";
import Arrow from "../assets/images/arrow.svg";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const ArrowImg = styled.img`
  transform: rotate(90deg);
  height: 100%;
`;

const Footer = styled.footer`
  background-color: white;
  height: 20%;
  margin-top: auto;
  width: 100%;
  filter: invert(100%);
`;

export const Contact = () => {
  return (
    <Container column fullPage padding>
      <Header>Contact Me</Header>
      <p>If you'd like to reach out, I'd love to hear from you!</p>
      <div style={{ height: "5em", display: "flex", gap: "1em" }}>
        <ArrowImg src={Arrow} />
      </div>
      <ContactForm />
      <Footer />
    </Container>
  );
};
