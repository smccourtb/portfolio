import styled, { keyframes } from "styled-components/macro";
import { Letter } from "./Letter";
import { useState } from "react";
import { Typing } from "./Typing";
import ThreeDEffect from "./ThreeDEffect";
import { css } from "styled-components";
import { Container } from "../styles/shared-styles";

const Pronounce = keyframes`
  from {
    color: inherit;
  }
  to {
    color: #f04d54
  }
`;

const drawnPronounce = keyframes`

  100% {
    transform: scale(1);
    opacity: 100%;

  }
`;

const OpeningHeader = styled.div`
  font-family: "Paytone One", serif;
  font-size: 3em;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5em;
  font-weight: bold;
  gap: 1em;
  //transition: ease-out 0.6s;
`;

const Pronunciation = styled.div`
  font-family: ${({ drawn }) => (drawn ? "Rock Salt" : "inherit")};
  animation: ${Pronounce} 0.7s ease-out;
  animation-delay: ${({ delay }) => delay};
  opacity: ${({ drawn }) => drawn && "35%"};
`;
const Splay = keyframes`
  100% {
    opacity: 5%;
    font-size: 3em;
  }
`;
const DrawnPronunciation = styled.div`
  font-family: "Rock Salt", serif;
  animation: ${({ different }) =>
    different
      ? css`
          ${Splay} .7s 12.5s cubic-bezier(0.26, -0.95, 1, -0.54) forwards
        `
      : css`
          ${drawnPronounce} 0.7s cubic-bezier(1, -0.09, 0.79, 0.98) forwards
        `};
  animation-delay: ${({ delay }) => delay};
  opacity: 0;
  position: relative;
  transform: scale(10);
`;

const FadeOut = keyframes`
  100% {
    opacity: 0;
  }
`;

const HandWritingContainer = styled.div`
  font-size: 1em;
  opacity: 5%;
  display: flex;
  flex-direction: column;
  line-height: 1.25em;
  width: 100%;
  max-width: 500px;
  align-self: center;
  padding: 0.5em;
  animation: ${FadeOut} 1s 12s forwards cubic-bezier(0.26, -0.95, 1, -0.54);
`;

export const Greeting = () => {
  const [state, setState] = useState(false);
  const [movement, setMovement] = useState([]);
  const introLetters = (text) =>
    text.split("").map((letter, idx) => <Letter key={idx} letter={letter} />);

  return (
    <Container
      onTouchMove={(e) =>
        setMovement((prev) => [e.touches[0].clientX, e.touches[0].clientY])
      }
      onMouseMove={(e) => setMovement((prev) => [e.clientX, e.clientY])}
      home
      className={"icon"}
    >
      <DrawnPronunciation
        style={{
          position: "absolute",
          top: "30%",
          left: "0",
          right: "0",
          // bottom: "93%",
          opacity: "0%",
          fontSize: ".1em",
        }}
        delay={"12.4s"}
        different
      >
        S
      </DrawnPronunciation>
      <OpeningHeader>
        <div
          style={{
            zIndex: "1",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>{introLetters("Hi!")}</div>
          <div style={{ display: "flex", gap: ".2em" }}>
            <div>{introLetters("My")}</div>
            <div>{introLetters("name")}</div>
            <div>{introLetters("is")}</div>
          </div>

          <div
            style={{
              display: "flex",
              // fontSize: ".9em",
              alignSelf: "flex-start",
            }}
          >
            {state ? (
              <div style={{ display: "flex" }}>
                <Pronunciation delay={".1s"}>
                  {introLetters("Shaw")}
                </Pronunciation>
                <Pronunciation delay={"1.1s"}>
                  {introLetters("na")}
                </Pronunciation>
                <Pronunciation delay={"2.1s"}>
                  {introLetters("than.")}
                </Pronunciation>
              </div>
            ) : (
              <Typing setState={setState} />
            )}
          </div>
        </div>

        <HandWritingContainer>
          <DrawnPronunciation
            style={{ alignSelf: "flex-start" }}
            delay={"8.4s"}
          >
            Shaw
          </DrawnPronunciation>
          <DrawnPronunciation delay={"9.4s"}>nuh</DrawnPronunciation>
          <DrawnPronunciation style={{ alignSelf: "flex-end" }} delay={"10.4s"}>
            then
          </DrawnPronunciation>
        </HandWritingContainer>

        <ThreeDEffect move={movement} />
      </OpeningHeader>
    </Container>
  );
};
