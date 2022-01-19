import styled, { keyframes, css } from "styled-components/macro";
import { useState } from "react";

const squash = keyframes`
  10% {
    transform: scale(130%, 20%);
  }
  50% {
    transform: scale(110%, 150%);
  }
  65% {
    transform: scale(90%, 125%)
  }
  100% {
    transform: scale(100%);
  }
`;

const GreetingLetter = styled.span`
  display: inline-block;
  color: ${({ playIntro, theme: { colors } }) => playIntro && colors.mainBrand};
  animation: ${({ playIntro }) =>
    playIntro &&
    css`
      ${squash} .7s ease-in-out 1
    `};
`;

export const Letter = ({ letter }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <GreetingLetter
      playIntro={hovered}
      onMouseEnter={() => setHovered(true)}
      onAnimationEnd={(e) => setHovered(false)}
    >
      {letter}
    </GreetingLetter>
  );
};
