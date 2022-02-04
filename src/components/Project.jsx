import styled, { keyframes } from "styled-components/macro";
import { theme } from "../styles/Themes";
import { css } from "styled-components";
import { useState } from "react";

const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  -webkit-transition: 0.7s ease-in-out;
  transition: 0.7s ease-in-out;
  transform-style: preserve-3d;
  font-size: 1em;
  display: flex;

  :hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 2px;
  background: ${({ color }) =>
    css`linear-gradient(to right bottom, ${color.secondary}, ${color.primary})`};
  box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  :before {
    content: "";
    position: absolute;
    border: 2px solid white;
    border-radius: 2px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
`;

const Back = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ image }) => `url(${image}) no-repeat 50% 100%`};
  background-size: cover;

  :before {
    content: "";
    position: absolute;
    border: ${({ color }) => color && `2px solid ${color.primary}`};
    border-radius: 2px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
`;

const Content = styled.div`
  transform: translatez(5em) scale(0.8);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  color: whitesmoke;
  font-family: "Paytone One", serif;
  flex-wrap: wrap;
  font-size: 150%;
  padding-right: 5em;
`;

const Button = styled.button`
  background-color: white;
  border: ${({ color }) => color && `2px solid ${color.primary}`};

  border-radius: 2px;
  color: ${({ color }) => color && `${color.primary}`};

  outline: none;
  padding: 0.25em 0.5em;
  text-decoration: none;
  transition: all 0.3s ease-out;
  font-weight: bold;
  box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.3);

  :hover {
    color: white;
    //border: 2px solid white;
    background-color: ${({ color }) => color && `${color.primary}`};

    transform: scale(110%);
  }
`;

const pickColor = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

export const Project = ({ projectData }) => {
  const [color, setColor] = useState(pickColor(theme.cardColors));
  const { name, image, links } = { ...projectData };
  return (
    <ProjectContainer>
      <Front image={image} color={color}>
        <Content>
          <ProjectTitle>{name}</ProjectTitle>
        </Content>
      </Front>

      <Back image={image} color={color}>
        <Content>
          {Object.keys(links).map((link, idx) => (
            <Button color={color} key={idx * 12} as={"a"} href={links[link]}>
              {link}
            </Button>
          ))}
        </Content>
      </Back>
    </ProjectContainer>
  );
};
