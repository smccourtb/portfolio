import { Project } from "./projects/Project";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useEffect, useState } from "react";
import FilterButton from "./projects/FilterButton";
import { FlexContainer, Header, variants } from "../styles/global/GlobalStyles";
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

  const shuffle = () => {
    const sorted = projectData.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setProjectData([...sorted]);
  };

  useEffect(() => {
    const newData = [...data];
    const filtered = newData.filter((element) => {
      for (const i of settings) {
        if (element.tag === i) {
          return true;
        }
      }
      return false;
    });
    if (filtered.length > 0) {
      setProjectData(filtered);
    } else {
      setProjectData(newData);
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

  const filterButtons = () => {
    const tools = ["React", "Javascript", "GDScript"];
    return tools.map((tool, idx) => (
      <FilterButton
        key={idx}
        setSettings={setSettings}
        settings={settings}
        name={tool}
      />
    ));
  };

  return (
    <ProjectsContainer
      color={"rebeccapurple"}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
      layout
    >
      <Header>Projects</Header>
      <ButtonContainer>
        <FlexContainer>{filterButtons()}</FlexContainer>
        <SortButton onClick={shuffle}>
          <DevelopmentIcon name={"Shuffle"} size={"3em"} />
        </SortButton>
      </ButtonContainer>
      <OuterProjectContainer>
        <Flipper flipKey={projectData} spring={"gentle"}>
          <ProjectContainer>{projects}</ProjectContainer>
        </Flipper>
      </OuterProjectContainer>
    </ProjectsContainer>
  );
};
