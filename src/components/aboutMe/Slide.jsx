import styled, { keyframes } from "styled-components/macro";

const slideAnim = (direction) => keyframes`
  0% {
    transform: ${
      ["left", "right"].includes(direction)
        ? `translateX(${direction === "left" ? `100%` : `-100%`})`
        : `translateY(${direction === "up" ? `100%` : `-100%`})`
    };
  }
  100% {
    transform: ${
      direction === ("left" || "right") ? `translateX(0)` : `translateY(0)`
    };
    opacity: 1;
  }`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  animation: ${({ direction }) => `${slideAnim(direction)} forwards`};
  animation-delay: ${({ delay }) => delay};
`;

const Slide = ({ direction, delay, children }) => {
  return (
    <Container>
      <Content direction={direction} delay={delay}>
        {children}
      </Content>
    </Container>
  );
};

export default Slide;
