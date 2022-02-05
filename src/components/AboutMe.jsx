import { SiCss3, SiHtml5, SiJavascript, SiReact } from "react-icons/si";
import Slide from "./aboutMe/Slide";
import styled, { css, keyframes } from "styled-components";
import { useState } from "react";
import { Container, Header } from "../styles/GlobalStyles";

const FloatUp = keyframes`
  0% {
    transform: translateY(500%);
  }
  50% {
    opacity: 100%;
  }
  100% {
    transform: translateY(-200%);
  }
`;

const AnimContainer = styled.div`
  animation: ${({ delay, speed }) =>
    css`
      ${FloatUp} ${speed}s ${delay}s infinite linear
    `};
  position: relative;
  opacity: 0;
  z-index: 2;
  left: ${({ position }) => `${position}em`};

  :hover {
    animation-play-state: paused;
  }
`;
const Paragraph = styled.p`
  text-align: ${({ first }) => (!first ? "left" : "right")};
  font-size: 0.9em;
  align-self: center;
  //height: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 2em 1em;
  max-width: 700px;
  height: 70vh;
`;

const UpperRight = styled.div`
  position: absolute;
  top: 0;
  left: 55%;
  width: 45%;
  height: 100%;
`;

const Strikethrough = styled.span`
  text-decoration: line-through;
`;

const Snippet = styled.span`
  font-style: italic;
  font-weight: bold;
  position: absolute;
  bottom: 10em;
  left: 0;
  right: 0;
  padding: 0 3em;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
`;

const TextBorder = styled.div`
  width: 100%;
  ${({ right }) => right && `border-left: .3em solid white`};
  ${({ left }) => left && `border-right: .3em solid white`};
  margin: ${({ left }) => (left ? `0 0.33em 0 0.5em` : `0 0.5em 0 0.4em`)};
`;

const Tooltip = styled.div`
  //display: inline;
  position: relative;

  :hover:after {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    background: #444;
    border-radius: 8px;
    color: #fff;
    position: absolute;
    content: attr(title);
    margin: -82px auto 0;
    font-size: 16px;
    padding: 13px;
    width: 220px;
  }

  :hover:before {
    border: solid;
    border-color: #444 transparent;
    border-width: 12px 6px 0 6px;
    content: "";
    left: 45%;
    bottom: 30px;
    position: absolute;
  }
`;
export const AboutMe = () => {
  const [active, setActive] = useState(false);
  const ranNum = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  return (
    <Container onTransitionEnd={() => setActive((prev) => !prev)}>
      <Header>About</Header>

      {active ? (
        <Content>
          <Slide direction={"up"} delay={0.5}>
            <Row>
              <Slide direction={"left"} delay={1.2}>
                <Paragraph first>
                  Hi, I'm Shawn! I started down this path seeing all these
                  amazing websites and getting{" "}
                  <Strikethrough>jealous</Strikethrough> curious about how they
                  were made. The world is challenging, exciting, frustrating and
                  everything rolled into one. Every day is an opportunity to
                  learn something new, and I love bringing new ideas to life.
                </Paragraph>
              </Slide>
              <TextBorder right />
              <UpperRight>
                <AnimContainer
                  position={ranNum(-5, 5)}
                  delay={ranNum(5, 7)}
                  speed={ranNum(9, 12)}
                >
                  <Tooltip title="Javascript">
                    <SiJavascript size={"3em"} />
                  </Tooltip>
                </AnimContainer>
                <AnimContainer
                  position={ranNum(-5, 5)}
                  delay={ranNum(5, 7)}
                  speed={ranNum(9, 12)}
                >
                  <SiReact size={"2em"} />
                </AnimContainer>
                <AnimContainer
                  position={ranNum(-5, 5)}
                  delay={ranNum(5, 7)}
                  speed={ranNum(9, 12)}
                >
                  <SiHtml5 size={"1em"} />
                </AnimContainer>
                <AnimContainer
                  position={ranNum(-5, 5)}
                  delay={ranNum(5, 7)}
                  speed={ranNum(9, 12)}
                >
                  <SiCss3 size={"1em"} />
                </AnimContainer>
              </UpperRight>
            </Row>
          </Slide>
          <Slide direction={"down"} delay={0.5}>
            {" "}
            <Row>
              <TextBorder left />

              <Slide direction={"right"} delay={1.2}>
                <Paragraph>
                  When i'm not working, you can find me trying to keep up with
                  my 3 boys, playing board games with friends, jamming out on my
                  acoustic-campfire style, or belly-laughing with my{" "}
                  <Strikethrough>best friend</Strikethrough> wife. Life is busy
                  but short, and I try to spend everyday improving myself.
                </Paragraph>
              </Slide>
            </Row>
          </Slide>
        </Content>
      ) : (
        <Content />
      )}

      <Snippet>
        I'm looking to join a team of like-minded people to learn and grow with.
      </Snippet>
    </Container>
  );
};
