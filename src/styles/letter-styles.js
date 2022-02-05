import styled, { css, keyframes } from "styled-components";

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

export const GreetingLetter = styled.span`
  font-family: "Paytone One", serif;
  display: inline-block;
  color: ${({ playIntro, theme: { colors } }) => playIntro && colors.mainBrand};
  animation: ${({ playIntro }) =>
    playIntro &&
    css`
      ${squash} .7s ease-in-out 1
    `};
`;
