import styled from "styled-components/macro";
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiStyledcomponents,
  SiJavascript,
  SiGodotengine,
  SiWebstorm,
  SiVisualstudiocode,
  SiWebpack,
  SiFirebase,
  SiTrello,
  SiGit,
  SiGithub,
  SiGitkraken,
} from "react-icons/si";

import {
  FaGuitar,
  FaHiking,
  FaDiceD20,
  FaGamepad,
  FaBiking,
} from "react-icons/fa";

import { IoShuffle } from "react-icons/io5";

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
    case "Webstorm":
      return <SiWebstorm size={size} />;
    case "Webpack":
      return <SiWebpack size={size} />;
    case "Visual Studio Code":
      return <SiVisualstudiocode size={size} />;
    case "Trello":
      return <SiTrello size={size} />;
    case "Firebase":
      return <SiFirebase size={size} />;
    case "Git":
      return <SiGit size={size} />;
    case "GitHub":
      return <SiGithub size={size} />;
    case "GitKraken":
      return <SiGitkraken size={size} />;
    case "Play Guitar":
      return <FaGuitar size={size} />;
    case "Go Hiking":
      return <FaHiking size={size} />;
    case "Go for a Bike Ride":
      return <FaBiking size={size} />;
    case "Play Board Games":
      return <FaDiceD20 size={size} />;
    case "Develop Video Games":
      return <FaGamepad size={size} />;
    case "Shuffle":
      return <IoShuffle size={size} />;

    default:
      return;
  }
};

export const DevelopmentIcon = ({ name, size }) => {
  return (
    <abbr title={name}>
      <DevLogo>{getLogo(name, size)}</DevLogo>
    </abbr>
  );
};
