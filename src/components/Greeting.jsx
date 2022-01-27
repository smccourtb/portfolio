import styled, { keyframes } from "styled-components/macro";
import { Letter } from "./Letter";
import { useState } from "react";
import { Typing } from "./Typing";
import { Container } from "../styles/shared-styles";

const slide = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(0%);
  }
  55% {
    letter-spacing: -.25em;
  }
  65% {
    letter-spacing: unset;
    transform: translateX(0px)

  }
  90% {
    letter-spacing: unset;
    transform: translateX(0px)
  }
  95% {
    transform: translateX(-30px)
  }
`;
const grow = keyframes`
  85% {
    transform: translateY(-.67em) scale(300%);
  }
`;

const Pronounce = keyframes`
  from {
    color: inherit;
  }
  to {
    color: #f04d54
  }
`;

const drawnPronounce = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;

const OpeningHeader = styled.h1`
  font-family: "Paytone One", serif;
  font-size: 1.5em;
  align-self: flex-start;
`;

const Pronunciation = styled.div`
  font-family: ${({ drawn }) => (drawn ? "Rock Salt" : "inherit")};
  animation: ${Pronounce} 0.7s ease-in-out;
  animation-delay: ${({ delay }) => delay};
  opacity: ${({ drawn }) => drawn && "35%"};
`;

const DrawnPronunciation = styled.div`
  font-family: "Rock Salt", serif;
  animation: ${drawnPronounce} 0.7s ease-in-out;
  animation-delay: ${({ delay }) => delay};
  opacity: 0;
`;

const JobTitle = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.theme.colors.darkAccent};
  animation: ${slide} 2s 6s ease-in-out;
  text-align: right;
  flex-grow: 1;
`;

const Period = styled.span`
  animation: ${grow} 0.3s 1.7s ease-in-out;
  height: 100%;
`;

export const Greeting = () => {
  const [state, setState] = useState(false);
  const introLetters = (text) =>
    text.split("").map((letter, idx) => <Letter key={idx} letter={letter} />);

  return (
    <Container
      primary
      column
      fullPage
      center
      style={{ width: "100%", paddingLeft: "15%" }}
      id={"greeting"}
    >
      <OpeningHeader>
        {introLetters("Hi!")}
        <br />
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: ".1em",
            fontFamily: "inherit",
          }}
        >
          <div style={{ fontFamily: "inherit" }}>{introLetters("My")}</div>
          <div style={{ fontFamily: "inherit" }}>{introLetters("Name")}</div>
          <div style={{ fontFamily: "inherit" }}>{introLetters("Is")}</div>

          <div style={{ display: "flex", fontFamily: "inherit" }}>
            {state ? (
              <>
                <Pronunciation delay={"5s"}>
                  {introLetters("Shaw")}
                </Pronunciation>
                <Pronunciation delay={"6s"}>{introLetters("na")}</Pronunciation>
                <Pronunciation delay={"7s"}>
                  {introLetters("than.")}
                </Pronunciation>
              </>
            ) : (
              <Typing setState={setState} />
            )}
          </div>
        </div>
      </OpeningHeader>
      <div style={{ width: "100%", display: "flex", position: "relative" }}>
        <JobTitle>aspiring web developer</JobTitle>
        <Period>.</Period>
      </div>
      <div style={{ fontSize: "2em", paddingTop: "2em" }}>
        <DrawnPronunciation delay={"9s"}>Shaw</DrawnPronunciation>
        <DrawnPronunciation delay={"10s"}>nuh</DrawnPronunciation>
        <DrawnPronunciation delay={"11s"}>then</DrawnPronunciation>
      </div>
    </Container>
  );
};
