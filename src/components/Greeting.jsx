import styled, { keyframes } from "styled-components/macro";
import { Letter } from "./greeting/Letter";
import { useState } from "react";
import { Typing } from "./greeting/Typing";
import ThreeDEffect from "./greeting/ThreeDEffect";
import { Container } from "../styles/global/GlobalStyles";
import {
  DrawnPronunciation,
  FlexContainer,
  HandWritingContainer,
  OpeningHeader,
  Pronunciation,
  Sentence,
  Trademark,
} from "../styles/greeting-styles";

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
    >
      <Trademark delay={"12.4s"}>S</Trademark>
      <OpeningHeader>
        <div>{introLetters("Hi!")}</div>
        <Sentence>
          {/*each word needs a div or each letter would be spaced out due to sentence components gap setting*/}
          <div>{introLetters("My")}</div>
          <div>{introLetters("name")}</div>
          <div>{introLetters("is")}</div>
        </Sentence>

        {state ? (
          <div style={{ display: "flex" }}>
            <Pronunciation delay={".1s"}>{introLetters("Shaw")}</Pronunciation>
            <Pronunciation delay={"1.1s"}>{introLetters("na")}</Pronunciation>
            <Pronunciation delay={"2.1s"}>
              {introLetters("than.")}
            </Pronunciation>
          </div>
        ) : (
          <Typing setState={setState} />
        )}

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
