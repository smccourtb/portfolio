import {
  AutoComplete,
  Container,
  FinishType,
  TypedOut,
  TypingContainer,
} from "../../styles/typing-styles";

export const Typing = ({ setState }) => {
  // the Container styled component seems useless, but when I take it
  // away there is a flickering effect when it's complete.
  return (
    <TypingContainer>
      <Container>
        <TypedOut>Shawn</TypedOut>
      </Container>
      <Container>
        {/* autocomplete is timed so the animation completes at the same time as FinishType,
         and sets the state in the parent component to indicate the animation sequence is complete
          and can be swapped out with the pronunciation components*/}
        <AutoComplete
          onAnimationEnd={(e) => {
            setState(true);
          }}
        >
          athan.
        </AutoComplete>
      </Container>
      <Container>
        <FinishType>athan.</FinishType>
      </Container>
    </TypingContainer>
  );
};
