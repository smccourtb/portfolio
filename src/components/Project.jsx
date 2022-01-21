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
  width: 100%;
  max-width: 28em;
  height: 100%;
  border-radius: 20px;
  //position: relative;
  -webkit-transition: 1.5s ease-in-out;
  transition: 1.5s ease-in-out;
  transform-style: preserve-3d;
  margin-top: 5em;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
`;
const Front = styled.div`
  z-index: 2;
  width: 100%;

  background-color: ${({ theme: { colors } }) => colors.lightShade};
  color: ${({ theme: { colors } }) => colors.darkShade};
  text-align: center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 1em;
`;

const Back = styled.div`
  z-index: 0;
  height: 16.5em;
  position: absolute;
  width: 80%;
  padding: 1em 1.5em;
  box-shadow: black 0 1em 2.5em -1em;

  background-color: ${({ theme: { colors } }) => colors.lightShade};
  color: ${({ theme: { colors } }) => colors.darkShade};
  transform: rotateY(180deg);
  text-align: center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 1em;
  top: -3.35em;
`;

const LowerBack = styled(Back)`
  top: 15em;
  height: 8em;
`;

const ProjectScreenShot = styled.img`
  height: 20em;
  width: 100%;
  border-radius: 1.2em;
  top: -7em;
  position: absolute;
  background-image: url(${({ image }) => image});

  background-size: 110%;
  background-position: top center;
  box-shadow: black 0 2em 4em -2em;

  animation: ${drift} 35s alternate infinite;
  animation-timing-function: ease-in-out;
`;

const Content = styled.div`
  transform: translatez(5em) scale(0.8);
  line-height: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  :before {
    content: "";
    position: absolute;
    bottom: -2em;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.mainBrand};
    width: 70px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const UpperContent = styled(Content)`
  gap: 1em;
  justify-content: space-evenly;
  padding-bottom: 3em;

  :before {
    bottom: 0;
  }
`;

const LowerContent = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  :before {
    bottom: 0.2em;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16em;
  text-align: left;
  gap: 1em;
`;

const ProjectTitle = styled.h3`
  font-size: 2em;
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.mainBrand : colors.darkShade};
  font-family: "Roboto Slab", serif;
`;

const ToolsTitle = styled.h4`
  font-size: 1.4em;
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.mainBrand : colors.darkShade};
  font-family: "Roboto Slab", serif;
`;

const ProjectDescription = styled.p`
  font-family: "Raleway", serif;
  font-size: 1em;
`;

const Button = styled.button`
  border-radius: 0.3em;
  background-color: transparent;
  border: 2px solid ${({ theme: { colors } }) => colors.lightAccent};
  color: ${({ theme: { colors } }) => colors.lightAccent};
  padding: 0.3em 1em;
  outline: none;
  font-size: 1.1em;
  text-decoration: none;
  transition: all 0.3s ease-out;

  :hover {
    color: ${({ theme: { colors } }) => colors.mainBrand};
    border: 2px solid ${({ theme: { colors } }) => colors.mainBrand};
    transform: scale(110%);
  }
`;

export const Project = () => {
  return (
    <Container>
      <Front>
        <Content>
          <h3>Hakkam Abdullah</h3>
          <p>
            I am a graphic designer and art director. I am as well specialised
            in front end web design, user experience and creating identities.
            Throughout my career, I have worked with companies of all shapes and
            sizes that enriched my experience
          </p>
        </Content>
      </Front>
      <Back>
        <Content>
          <h3>Contact Me</h3>
        </Content>
      </Back>
    </Container>
  );
};
