import { Container, Header } from "../styles/shared-styles";
import { Project } from "./Project";
import styled from "styled-components/macro";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";
import { SiReact } from "react-icons/si";

const ProjectContainer = styled.div`
  //display: flex;
  //flex-wrap: wrap;
  max-height: 80vh;
  font-size: 12px;
  //gap: 2em;
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
      <Header>Projects</Header>

      <div style={{ display: "flex", alignSelf: "center", zIndex: "1" }}>
        <button
          onClick={Filter}
          style={{ color: "black", background: "none", border: "none" }}
        >
          <SiReact />
        </button>
        <button onClick={() => setProjectData(data)}>All</button>
        <button
          onClick={() => {
            const sorted = projectData.sort(() =>
              Math.random() > 0.5 ? 1 : -1
            );
            setProjectData([...sorted]);
          }}
        >
          Shuffle
        </button>
        <button
          onClick={() => {
            const sorted = projectData.sort((a, b) => a.release - b.release);
            setProjectData([...sorted]);
          }}
        >
          Ascending (Oldest to Newest)
        </button>
        <button
          onClick={() => {
            const sorted = projectData.sort((a, b) => b.release - a.release);
            setProjectData([...sorted]);
          }}
        >
          Descending (Newest to Oldest)
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Flipper flipKey={projectData} spring={"gentle"}>
          <ProjectContainer>{projects} </ProjectContainer>
        </Flipper>
      </div>
    </div>
  );
};
