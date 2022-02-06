import styled, { keyframes } from "styled-components/macro";

const Pronounce = keyframes`
  from {
    color: inherit;
  }
  to {
    color: #f04d54;
  }
`;

const drawnPronounce = keyframes`
  100% {
    opacity: 100%;
  }
`;

const Splay = keyframes`
  100% {
    opacity: 5%;
    font-size: 3em;
  }
`;

const FadeOut = keyframes`
  100% {
    opacity: 0;
  }
`;

export const OpeningHeader = styled.div`
  font-family: "Paytone One", serif;
  font-size: 3em;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5em;
  font-weight: bold;
  z-index: 5;
`;

export const Pronunciation = styled.div`
  animation: ${Pronounce} 0.7s ease-out;
  animation-delay: ${({ delay }) => delay};
`;

export const DrawnPronunciation = styled.div`
  font-family: "Rock Salt", serif;
  animation: ${drawnPronounce} 0.7s cubic-bezier(1, -0.09, 0.79, 0.98) forwards;
  animation-delay: ${({ delay }) => delay};
  opacity: 0;
  position: relative;
  align-self: ${({ left, right }) =>
    left ? "flex-start" : right ? "flex-end" : "center"};
`;

export const Trademark = styled(DrawnPronunciation)`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  animation: ${Splay} 0.7s cubic-bezier(0.26, -0.95, 1, -0.54) forwards;
  animation-delay: ${({ delay }) => delay};
  transform: scale(10);
`;

export const HandWritingContainer = styled.div`
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

export const Sentence = styled.div`
  display: flex;
  gap: 0.2em;
`;

export const FlexContainer = styled.div`
  display: flex;
`;
