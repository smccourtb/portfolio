import { Container, Header } from "../styles/shared-styles";
import { Project } from "./Project";
import styled from "styled-components/macro";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  max-width: 700px;
  min-height: 70vh;
  max-height: 80vh;
  font-size: 12px;
  gap: 0.5em;
  padding: 2em;
`;

const Test = styled.div`
  flex: 1 1 10em;
  //min-height: 5em;
`;

export const Projects = ({ data }) => {
  const [projectData, setProjectData] = useState(data);
  const [settings, setSettings] = useState({
    filterItems: [],
    sort: "ascending",
  });

  useEffect(() => {
    let newData = [...data];
    const filtered = newData.filter((data) => {
      const tools = [...data.tools.framework, ...data.tools.language];
      for (const i of settings.filterItems) {
        if (tools.includes(i)) {
          return true;
        }
      }
      return false;
    });
    if (filtered.length < 1) {
      setProjectData(data);
    } else {
      setProjectData(filtered);
    }
  }, [data, settings]);

  const projects = projectData.map((project) => {
    return (
      <Flipped flipId={project.id} key={project.id}>
        <Test wide>
          <Project projectData={project} key={project.id} />
        </Test>
      </Flipped>
    );
  });

  return (
    <Container
      style={{ alignItems: "center", justifyContent: "center", height: "90vh" }}
    >
      <Header>Projects</Header>
      <div
        style={{
          display: "flex",
          zIndex: "1",
          flexWrap: "wrap",
          width: "70vw",
          justifyContent: "space-between",
          borderBottom: "2px solid whitesmoke",
        }}
      >
        <div style={{ display: "flex" }}>
          <FilterButton
            setSettings={setSettings}
            settings={settings}
            name={"React"}
          />
          <FilterButton
            setSettings={setSettings}
            settings={settings}
            name={"Javascript"}
          />
          <FilterButton
            setSettings={setSettings}
            settings={settings}
            name={"Styled Components"}
          />
          <FilterButton
            setSettings={setSettings}
            settings={settings}
            name={"GDScript"}
          />
        </div>

        <div>
          <SortButton
            data={projectData}
            setData={setProjectData}
            method={"shuffle"}
            iconName={"mdi:shuffle"}
          />

          {/*SORTING*/}
          <SortButton
            data={projectData}
            setData={setProjectData}
            method={"sortAscending"}
            iconName={"mdi:sort-clock-ascending-outline"}
          />
          <SortButton
            data={projectData}
            setData={setProjectData}
            method={"sortDescending"}
            iconName={"mdi:sort-clock-descending-outline"}
          />
        </div>
      </div>

      <div
        style={{
          minWidth: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Flipper flipKey={projectData} spring={"gentle"}>
          <ProjectContainer>{projects} </ProjectContainer>
        </Flipper>
      </div>
    </Container>
  );
};
