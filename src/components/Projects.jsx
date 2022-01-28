import { Container, Header } from "../styles/shared-styles";
import { Project } from "./Project";
import styled from "styled-components/macro";

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  font-size: 12px;
  gap: 2em;
`;

export const Projects = ({ data }) => {
  const projects = data.map((project) => <Project projectData={project} />);
  return (
    <div className={"icon"}>
      <ProjectContainer>{projects}</ProjectContainer>
    </div>
  );
};
