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

const Open = keyframes`
  100% {
    overflow: visible;
    opacity: 100%;
    width: 50.5%;
  }
`;
const OpenOne = keyframes`
  100% {
    height: 100%;
    margin: 0;


  }
`;

const Paragraph = styled.p`
  text-align: ${({ first }) => (!first ? "left" : "right")};
  border-right: ${({ first }) => first && `3px solid white`};
  border-left: ${({ first }) => !first && `3px solid white`};
  padding: 0 0.5em;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  //margin: 0 49.5%;
  font-size: 0.9em;
  margin: auto;

  align-self: ${({ first }) => (first ? "flex-start" : "flex-end")};
  animation: ${OpenOne} 0.5s both, ${Open} 1s 3s both;
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
  height: 150px;
  width: 80%;
`;

const Subheader = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  align-self: flex-start;
  border-bottom: 1px solid;
`;
export const AboutMe = () => {
  return (
    <div className={"icon"}>
      {/*<Header>About</Header>*/}

      <div
        style={{
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: "0 .5em",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "60vh" }}
        >
          <Paragraph first>
            Hi, I'm Shawn! I started down this path seeing all these amazing
            websites and getting{" "}
            <span style={{ textDecoration: "line-through" }}>jealous</span>{" "}
            curious about how they were made. The world is challenging,
            exciting, frustrating and everything rolled into one. Every day is
            an opportunity to learn something new, and I love bringing new ideas
            to life.
          </Paragraph>
          <Paragraph>
            When i'm not working, you can find me trying to keep up with my 3
            boys, playing board games with friends, jamming out on my
            acoustic-campfire style, or belly-laughing with my{" "}
            <span style={{ textDecoration: "line-through" }}>best friend</span>{" "}
            wife. Life is busy but short, and I try to spend everyday improving
            myself.
          </Paragraph>
        </div>
        <div
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          <span>
            I'm looking to join a team of like-minded people to learn and grow
            with.
          </span>
        </div>
      </div>
    </div>
  );
};
