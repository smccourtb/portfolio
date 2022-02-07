import styled from "styled-components";
import ContactForm from "./contact/ContactForm";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github-icon.svg";
import CodePenIcon from "../assets/icons/codepen.svg";
import FrontEndMentorIcon from "../assets/icons/frontendmentor.svg";
import {
  ContactContainer,
  Closer,
  ContactContent,
  ContactHeader,
  ContactLinks,
  Footer,
  Logo,
  Opener,
} from "../styles/contact-styles";

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>Contact</ContactHeader>
      <ContactContent>
        <Opener>If you'd like to reach out, I'd love to hear from you!</Opener>
        <ContactForm />
      </ContactContent>
      <Closer>Or check out what i've been up to.</Closer>

      <Footer>
        <ContactLinks>
          <a href="https://www.github.com/smccourtb">
            <Logo src={GithubIcon} alt="Github" />
          </a>
          <a href="https://www.frontendmentor.io/profile/smccourtb">
            <Logo src={FrontEndMentorIcon} alt="Frontend Mentor" />
          </a>
          <a href="https://codepen.io/smccourtb">
            <Logo src={CodePenIcon} alt="Codepen" />
          </a>
          <a href="https://www.linkedin.com/in/shawnathan-mccourt/">
            <Logo src={LinkedInIcon} alt="Linkedin" />
          </a>
        </ContactLinks>
      </Footer>
    </ContactContainer>
  );
};
