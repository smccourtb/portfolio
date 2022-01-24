import { Container, Header } from "../styles/shared-styles";
import ProfilePic from "../assets/images/profile.jpg";
import styled, { keyframes } from "styled-components/macro";
import Javascript from "../assets/icons/logo-javascript.svg";
import HTML5 from "../assets/icons/html-1.svg";
import CSS from "../assets/icons/css-3.svg";
import Webpack from "../assets/icons/webpack-icon.svg";
import Webstorm from "../assets/icons/webstorm-icon.svg";
import ReactIcon from "../assets/icons/react-2.svg";
import StyledComponents from "../assets/icons/styled-components-1.svg";
import Git from "../assets/icons/git-icon.svg";
import Github from "../assets/icons/github-icon.svg";
import Firebase from "../assets/icons/firebase-1.svg";
import VSCode from "../assets/icons/visual-studio-code-1.svg";
import NPM from "../assets/icons/npm.svg";
import Godot from "../assets/icons/godot-logo.svg";
import Ubuntu from "../assets/icons/ubuntu-4.svg";

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 8em;
  width: 8em;
  align-self: flex-end;
  float: right;
`;

const Logo = styled.img`
  transform-box: fill-box;
  transform-origin: 15% 80%;
  height: 2em;
  width: 2em;

  :hover {
    //transform: translate(150px, 40px);
    filter: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`;

const Subheader = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  align-self: flex-start;
  border-bottom: 1px solid;
`;
export const AboutMe = () => {
  return (
    <Container column center fullPage space>
      <header
        style={{
          width: "27px",
          height: "70px",
          backgroundColor: "#EFC269",
        }}
      >
        <Header>About</Header>
      </header>
      <div>
        <ProfilePicture src={ProfilePic} alt="Me! Shawn McCourt" />
        <p
          style={{
            color: "#33404e",
            fontWeight: "500",
            fontFamily: "Raleway",
            fontSize: "1em",
          }}
        >
          Hi, I'm Shawn! I love to create things. I find that front-end
          development is filled with unique and exciting challenges, and there
          is always something to learn. I can adapt quickly and believe you can
          do anything you put your mind to. I use best practices with modern
          methods to create responsive and semantic web applications. In my free
          time I like to play the guitar, hike around in the woods of Maine, and
          play board games.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
        <div
          style={{
            height: ".5em",
            backgroundColor: "#EFC269",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            I'm looking to join a team of like-minded
          </p>
        </div>
        <div
          style={{
            height: ".5em",
            backgroundColor: "#EFC269",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            people to learn and grow with.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontSize: "1em",
          gap: "1em",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            textAlign: "left",
          }}
        >
          <Subheader>Tools and Technologies</Subheader>
          <p style={{ whiteSpace: "pre-wrap", fontSize: ".55em" }}>
            {
              "Here are some of the languages, tools, frameworks i've used in development"
            }
          </p>
        </div>
        <LogoContainer>
          <Logo alt="Javascript" src={Javascript} />
          <Logo alt="HTML 5" src={HTML5} />
          <Logo alt="CSS 3" src={CSS} />
          <Logo alt="React" src={ReactIcon} />
          <Logo alt="Styled Components" src={StyledComponents} />
          <Logo alt="Webpack" src={Webpack} />
          <Logo alt="GDScript" src={Godot} />
          <Logo alt="Webstorm" src={Webstorm} />
          <Logo alt="VSCode" src={VSCode} />
          <Logo alt="Git" src={Git} />
          <Logo alt="Github" src={Github} />
          <Logo alt="Firebase" src={Firebase} />
          <Logo alt="npm" src={NPM} />
          <Logo alt="Ubuntu" src={Ubuntu} />
        </LogoContainer>
      </div>
    </Container>
  );
};
