import styled, { keyframes } from "styled-components/macro";

const TypingEffect = keyframes`
  from {
    width: 0
  }
  to {
    width: 100%
  }
`;

const complete = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  from {
    border-color: orange;
  }
  to {
    border-color: transparent;

  }
`;

const byeCaret = keyframes`
  from {
    border-right: 0;

  }
  to {
    border-right: 0;
  }
`;

const showText = keyframes`
  0% {
    opacity: 0;
  }
  6% {
    opacity: 30%;
  }
  100% {
    opacity: 30%;
  }
`;

const TypedOut = styled.div`
  font-family: inherit;
  overflow: hidden;
  border-right: 0.1em solid orange;
  width: 0;
  z-index: 1;
  animation: ${TypingEffect} 1s 1s steps(5, end) forwards,
    ${blink} 0.8s infinite, ${byeCaret} 100000s 2.4s;
`;

const FinishType = styled.div`
  overflow: hidden;
  font-family: inherit;
  border-right: 0.1em solid orange;
  width: 0;
  animation: ${byeCaret} 2.4s, ${complete} 0.2s 4s forwards,
    ${blink} 0.8s infinite, ${byeCaret} 10000s 5s;
`;

const AutoComplete = styled.div`
  font-family: inherit;
  opacity: 0;
  width: 0;
  animation: ${showText} 1.65s 2.4s 1;
  z-index: -2;
`;

const Container = styled.div`
  font-family: inherit;
  display: inline-block;
`;

export const Typing = ({ setState }) => {
  return (
    <>
      <Container>
        <TypedOut>Shawn</TypedOut>
      </Container>
      <Container>
        <AutoComplete onAnimationEnd={(e) => setState(true)}>
          athan.
        </AutoComplete>
      </Container>
      <Container>
        <FinishType>athan.</FinishType>
      </Container>
    </>
  );
};
