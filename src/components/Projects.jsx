import { Project } from "./projects/Project";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useEffect, useState } from "react";
import FilterButton from "./projects/FilterButton";
import { FlexContainer, Header } from "../styles/global/GlobalStyles";
import { DevelopmentIcon } from "./projects/DevelopmentIcon";
import {
  ButtonContainer,
  Div,
  OuterProjectContainer,
  ProjectContainer,
  SortButton,
  ProjectsContainer,
} from "../styles/projects-styles";

export const Projects = ({ data }) => {
  const [projectData, setProjectData] = useState(data);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    const newData = [...data];
    const filtered = newData.filter((element) => {
      const tools = [...element.tools.framework, ...element.tools.language];
      for (const i of settings) {
        if (tools.includes(i)) {
          return true;
        }
      }
      return false;
    });
    if (filtered.length < 1) {
      setProjectData(newData);
    } else {
      setProjectData(filtered);
    }
  }, [data, settings]);

  const projects = projectData.map((project) => {
    return (
      <Flipped flipId={project.id} key={project.id}>
        <Div>
          <Project projectData={project} key={project.id} />
        </Div>
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
          <ProjectContainer>{projects}</ProjectContainer>
        </Flipper>
      </OuterProjectContainer>
    </ProjectsContainer>
  );
};
