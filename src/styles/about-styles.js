import styled, { keyframes } from "styled-components/macro";

const FloatUp = keyframes`
  0% {
    transform: translateY(900%);
  }
  50% {
    opacity: 100%;
  }
  100% {
    transform: translateY(-200%);
  }
`;

export const AnimContainer = styled.div`
  animation: ${FloatUp} infinite linear;
  animation-duration: ${(props) => `${props.speed}s`};
  animation-delay: ${(props) => `${props.delay}s`};
  animation-direction: ${({ down }) => down && "reverse"};
  position: absolute;
  opacity: 0;
  z-index: 2;
  left: ${({ position, down }) => (down ? `-50%` : `${position}em`)};
  right: ${({ position, down }) => (down ? `${position}em` : `-50%`)};

  :hover {
    animation-play-state: paused;
  }
`;
export const Paragraph = styled.p`
  text-align: ${({ first }) => (!first ? "left" : "right")};
  font-size: 0.9em;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 2em 1em;
  max-width: 700px;
  max-height: 600px;
`;

export const Strikethrough = styled.span`
  text-decoration: line-through;
`;

export const Snippet = styled.span`
  font-style: italic;
  font-weight: bold;
  position: absolute;
  bottom: 15%;
  left: 0;
  right: 0;
  padding: 0 3em;
`;

export const Row = styled.div`
  display: flex;
  height: 100%;
`;

export const TextBorder = styled.div`
  width: 100%;
  ${({ right }) => right && `border-left: .3em solid white`};
  ${({ left }) => left && `border-right: .3em solid white`};
  margin: ${({ left }) => (left ? `0 0.33em 0 0.5em` : `0 0.5em 0 0.4em`)};
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
