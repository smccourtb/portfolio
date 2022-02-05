import {
  AutoComplete,
  Container,
  FinishType,
  TypedOut,
  TypingContainer,
} from "../../styles/typing-styles";

export const Typing = ({ setState }) => {
  return (
    <div
      style={{
        fontFamily: "Paytone One",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <TypedOut>Shawn</TypedOut>
      </Container>
      <Container>
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
    </div>
  );
};
