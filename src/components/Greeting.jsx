import { Container } from "../App";
import styled, { css, keyframes } from "styled-components/macro";
import { Letter } from "./Letter";
import { useState } from "react";
import { Typing } from "./Typing";

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

const OpeningHeader = styled.h1`
  font-family: "Paytone One", serif;
  font-size: 1.5em;
`;

const JobTitle = styled.p`
  font-family: "Railway", sans-serif;
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
    <Container primary column>
      <OpeningHeader>
        {introLetters("Hi!")}
        <br />
        <div style={{ display: "flex", width: "100%", gap: ".1em" }}>
          <div>{introLetters("My")}</div>
          <div>{introLetters("Name")}</div>
          <div>{introLetters("Is")}</div>

          <div style={{ display: "flex", fontFamily: "Paytone One" }}>
            {state ? (
              introLetters("Shawnathan.")
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
    </Container>
  );
};
