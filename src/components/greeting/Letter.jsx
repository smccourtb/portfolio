import styled, { keyframes, css } from "styled-components/macro";
import { useState } from "react";
import { GreetingLetter } from "../../styles/letter-styles";

export const Letter = ({ letter }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <GreetingLetter
      playIntro={hovered}
      onMouseEnter={(e) => setHovered(true)}
      onAnimationEnd={(e) => setHovered(false)}
    >
      {letter}
    </GreetingLetter>
  );
};
