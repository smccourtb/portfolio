import { Container, Header } from "../styles/shared-styles";
import { Project } from "./Project";
import styled from "styled-components/macro";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import { Icon } from "@iconify/react";

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

const Button = styled.button`
  background: none;
  border: none;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? "white" : `transparent`)} none;
  color: ${({ active }) => (active ? "black" : `white`)} none;

  padding: 0.5em;
  border-radius: 2.55px 2.5px 0 0;
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
  }, [settings]);

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
    <div
      className={"icon"}
      style={{ alignItems: "center", justifyContent: "center", height: "90vh" }}
    >
      <Header style={{ fontSize: "7em" }}>Projects</Header>
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
          <Button
            onClick={() => {
              const sorted = projectData.sort(() =>
                Math.random() > 0.5 ? 1 : -1
              );
              setProjectData([...sorted]);
            }}
          >
            <Icon
              icon="mdi:shuffle"
              style={{
                width: "2em",
                height: "2em",
              }}
            />
          </Button>

          {/*SORTING*/}
          <Button
            onClick={() => {
              const sorted = projectData.sort((a, b) => a.release - b.release);
              setProjectData([...sorted]);
            }}
          >
            <Icon
              icon="mdi:sort-clock-ascending-outline"
              style={{
                width: "2em",
                height: "2em",
              }}
            />
          </Button>
          <Button
            onClick={() => {
              const sorted = projectData.sort((a, b) => b.release - a.release);
              setProjectData([...sorted]);
            }}
          >
            <Icon
              icon="mdi:sort-clock-descending-outline"
              style={{
                width: "2em",
                height: "2em",
              }}
            />
          </Button>
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
    </div>
  );
};
