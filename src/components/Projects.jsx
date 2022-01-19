import { Header } from "../styles/shared-styles";
import { Container } from "../App";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <Container primary center column>
      <Header>Projects</Header>
      <Project />
    </Container>
  );
};
