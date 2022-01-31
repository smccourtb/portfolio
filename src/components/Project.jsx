import styled, { keyframes } from "styled-components/macro";
import { Tools } from "./Tools";

const drift = keyframes`
  0% {
    background-position: top center;
  }
  25% {
    background-position: center right;
  }
  50% {
    background-position: top right;
  }
  75% {
    background-position: center left;
  }
  100% {
    background-position: bottom right;
  }
`;

const ProjectContainer = styled.div`
  width: 20em;
  height: 20em;
  position: relative;
  -webkit-transition: 0.7s ease-in-out;
  transition: 0.7s ease-in-out;
  transform-style: preserve-3d;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  background: linear-gradient(to right bottom, #7ed56f, #28b485);
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
    width: 90%;
    height: 90%;
  }
`;

const Back = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  background-color: ${({ theme: { colors } }) => colors.lightShade};
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  background: ${({ image }) => `url(${image}) no-repeat 50% 100%`};
  background-size: cover;

  :before {
    content: "";
    position: absolute;
    border: 2px solid #28b485;
    border-radius: 2px;
    width: 90%;
    height: 90%;
  }
`;

const LowerBack = styled(Back)`
  top: 10em;
  height: 8em;
  width: 75%;
`;

const ProjectScreenShot = styled.img`
  height: 5em;
  width: 5em;
  border-radius: 3px;
  //top: -7em;
  position: absolute;
  bottom: 10%;
  right: 10%;

  // animation: ${drift} 35s alternate infinite;
  //animation-timing-function: ease-in-out;
`;

const Content = styled.div`
  transform: translatez(5em) scale(0.8);
  line-height: 2.5em;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  // little red dash on the bottom of each content card
  // :before {
  //   content: "";
  //   position: absolute;
  //   bottom: -2em;
  //   height: 3px;
  //   background-color: ${({ theme: { colors } }) => colors.mainBrand};
  //   width: 70px;
  //   left: 50%;
  //   transform: translateX(-50%);
  // }
`;

const LowerContent = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: white;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  line-height: unset;
`;

const ProjectTitle = styled.h3`
  font-size: 2.5em;
  text-transform: uppercase;
  color: whitesmoke;
  font-family: "Paytone One", serif;
  align-self: flex-start;
  margin-top: auto;
`;

const ProjectDescription = styled.p`
  font-family: "Raleway", serif;
  text-align: left;
  margin: 1em;
  color: black;
  background-color: white;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid #28b485;
  border-radius: 2px;
  color: #28b485;
  outline: none;
  text-decoration: none;
  transition: all 0.3s ease-out;
  padding: 0.15em 1em;
  font-size: 1.2em;
  font-weight: bold;
  box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.3);

  :hover {
    color: white;
    border: 2px solid white;
    background-color: #28b485;
    transform: scale(110%);
  }
`;

export const Project = ({ projectData }) => {
  const { name, description, image, tools, links } = { ...projectData };

  return (
    <ProjectContainer>
      <Front image={image}>
        <Content>
          <ProjectTitle>{name}</ProjectTitle>
        </Content>
      </Front>

      <Back image={image}>
        <Content>
          {Object.keys(links).map((link, idx) => (
            <Button key={idx * 12} as={"a"} href={links[link]}>
              {link}
            </Button>
          ))}
        </Content>
      </Back>
    </ProjectContainer>
  );
};
