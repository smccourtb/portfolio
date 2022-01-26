import { Container, Header } from "../styles/shared-styles";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github-icon.svg";
import CodePenIcon from "../assets/icons/codepen.svg";
import FrontEndMentorIcon from "../assets/icons/frontendmentor.svg";
import Arrow from "./Arrow";

const Footer = styled.div`
  font-size: 0.5em;
  min-height: 104px;
  width: 100%;
  position: relative;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: -2.25em;
    left: -2.5em;
    width: 19.5em;
    height: 6em;
    border-radius: 1.5em;
    box-shadow: 10em 10em 0 200em #f04d54;
  }

  :after {
    content: "";
    position: absolute;
    top: -2em;
    left: -3em;
    width: 20.5em;
    height: 6.25em;
    border-radius: 1.75em;
    box-shadow: 5em 5em 0 100em rgb(52, 53, 64);
    transform: scaleY(-1);
  }
`;

const Logo = styled.img`
  height: 100%;
`;

export const Contact = () => {
  return (
    <Container column fullPage padding style={{ position: "absolute" }}>
      <Container
        column
        center
        style={{
          gap: "1em",
          height: "100%",
        }}
      >
        <Header>Contact Me</Header>
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: ".9em" }}>
            If you'd like to reach out, I'd love to hear from you!
          </p>
        </div>
        <ContactForm />
        <p style={{ marginTop: "auto", alignSelf: "flex-start" }}>
          Or you can check out what i've been up to:
        </p>
        <Arrow
          firstColor="rgb(52, 53, 64)"
          secondColor="white"
          fillPercentage={"59.4%"}
        />
      </Container>

      <Footer>
        <div
          style={{
            height: "2.5em",
            display: "flex",
            gap: "1em",
            width: "15em",
            marginTop: ".5em",
            marginLeft: "1em",
            justifyContent: "center",
            zIndex: "2",
            position: "absolute",
          }}
        >
          <a href="https://www.github.com/smccourtb">
            <Logo src={GithubIcon} alt="" />
          </a>
          <a href="https://www.frontendmentor.io/profile/smccourtb">
            <Logo src={FrontEndMentorIcon} alt="" />
          </a>
          <Logo src={CodePenIcon} alt="" />
          <a href="https://www.linkedin.com/in/shawnathan-mccourt/">
            <Logo src={LinkedInIcon} alt="" />
          </a>
        </div>
      </Footer>
    </Container>
  );
};
