import { Container, Header } from "../styles/shared-styles";
import { Project } from "./Project";
import styled from "styled-components/macro";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 80vh;
  //justify-content: space-evenly;
  font-size: 12px;
  position: relative;
  gap: 2em;
`;

export const Projects = ({ data }) => {
  const [projectData, setProjectData] = useState(data);
  const Filter = () => {
    let newData = [...projectData];
    const filtered = newData.filter((data) =>
      data.tools.framework.includes("React")
    );
    setProjectData(filtered);
  };
  const projects = projectData.map((project) => (
    <Flipped flipId={project.id} key={project.id}>
      <div>
        <Project projectData={project} key={project.id} />
      </div>
    </Flipped>
  ));
  return (
    <div className={"icon"}>
      <button onClick={Filter}>Sort</button>
      <button onClick={() => setProjectData(data)}>All</button>
      <button
        onClick={() => {
          const sorted = projectData.sort(() => (Math.random() > 0.5 ? 1 : -1));
          setProjectData([...sorted]);
        }}
      >
        Shuffle
      </button>

      <Flipper flipKey={projectData} spring={"gentle"}>
        <ProjectContainer>{projects} </ProjectContainer>
      </Flipper>
    </div>
  );
};
