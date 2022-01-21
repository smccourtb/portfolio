import styled, { css, keyframes } from "styled-components/macro";
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiStyledcomponents,
  SiJavascript,
} from "react-icons/si";

// animation for developer logo on mouse enter
const me = keyframes`
  50% {
    transform: scale(120%);
  }
`;

const DevLogo = styled.div`
  color: ${({ state, name, theme: { colors } }) =>
    state === name ? colors.mainBrand : colors.lightAccent};
  animation: ${({ state, name }) =>
    state === name &&
    css`
      ${me} 1s
    `};
  transition: color 1s ease-in-out;
  cursor: pointer;
`;

const getLogo = (techName, setState, size) => {
  switch (techName) {
    case "React":
      return <SiReact size={size} onMouseEnter={(e) => setState(techName)} />;
    case "CSS 3":
      return <SiCss3 size={size} onMouseEnter={(e) => setState(techName)} />;
    case "HTML 5":
      return <SiHtml5 size={size} onMouseEnter={(e) => setState(techName)} />;
    case "Styled Components":
      return (
        <SiStyledcomponents
          size={size}
          onMouseEnter={(e) => setState(techName)}
        />
      );
    case "Javascript":
      return (
        <SiJavascript size={size} onMouseEnter={(e) => setState(techName)} />
      );
    default:
      return;
  }
};

export const DevelopmentIcon = ({ name, state, setState, size }) => {
  return (
    <DevLogo name={name} state={state}>
      {getLogo(name, setState, size)}
    </DevLogo>
  );
};
