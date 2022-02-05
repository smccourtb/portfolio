import styled, { keyframes } from "styled-components";

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

export const TypedOut = styled.div`
  font-family: inherit;
  overflow: hidden;
  border-right: 0.1em solid orange;
  width: 0;
  z-index: 1;
  animation: ${TypingEffect} 1s 1s steps(5, end) forwards,
    ${blink} 0.8s infinite, ${byeCaret} 0.2s 2.4s forwards;
`;

export const FinishType = styled.div`
  overflow: hidden;
  font-family: inherit;
  border-right: 0.1em solid orange;
  width: 0;
  animation: ${byeCaret} 2.4s, ${complete} 0.2s 4s forwards,
    ${blink} 0.8s infinite, ${byeCaret} 0.2s 6.3s forwards;
`;

export const AutoComplete = styled.div`
  font-family: inherit;
  opacity: 0;
  width: 0;
  animation: ${showText} 6.3s 2.5s;
  z-index: -2;
`;

export const Container = styled.div`
  font-family: inherit;
`;

export const TypingContainer = styled.div`
  font-family: "Paytone One", serif;
  display: flex;
  align-items: center;
`;
