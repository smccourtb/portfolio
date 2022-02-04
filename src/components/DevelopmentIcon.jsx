import styled, { css, keyframes } from "styled-components/macro";
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiStyledcomponents,
  SiJavascript,
  SiGodotengine,
} from "react-icons/si";

// animation for developer logo on mouse enter
const me = keyframes`
  50% {
    transform: scale(120%);
  }
`;

const DevLogo = styled.div`
  cursor: pointer;
  pointer-events: none;
`;

const getLogo = (techName, size) => {
  switch (techName) {
    case "React":
      return <SiReact size={size} />;
    case "CSS 3":
      return <SiCss3 size={size} />;
    case "HTML 5":
      return <SiHtml5 size={size} />;
    case "Styled Components":
      return <SiStyledcomponents size={size} />;
    case "Javascript":
      return <SiJavascript size={size} />;
    case "GDScript":
      return <SiGodotengine size={size} />;
    default:
      return;
  }
};

export const DevelopmentIcon = ({ name, size }) => {
  return <DevLogo name={name}>{getLogo(name, size)}</DevLogo>;
};
