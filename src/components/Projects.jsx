import { Project } from "./projects/Project";
import { useCallback, useState } from "react";
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

const tools = ["React", "Javascript", "GDScript"];

export const Projects = ({ data }) => {
  const [projectData, setProjectData] = useState(data);
  const [settings, setSettings] = useState([]);

  const shuffle = useCallback(() => {
    const newData = [...projectData];
    for (let i = newData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newData[i], newData[j]] = [newData[j], newData[i]];
    }
    setProjectData(newData);
  }, [projectData]);

  const filter = useCallback(
    (x) => {
      const newSettings = [...settings];
      // check if target is in the array, add it if not, remove it if so
      newSettings.includes(x)
        ? newSettings.splice(newSettings.indexOf(x), 1)
        : newSettings.push(x);

      // update state
      newSettings.length
        ? setProjectData(data.filter((item) => newSettings.includes(item.tag)))
        : setProjectData(data);

      setSettings(newSettings);
    },
    [data, settings]
  );

  return (
    <ProjectsContainer
      color={"rebeccapurple"}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <Header>Projects</Header>
      <ButtonContainer>
        <FlexContainer>
          {tools.map((tool, idx) => (
            <FilterButton key={idx} filter={filter} name={tool} />
          ))}
        </FlexContainer>
        <SortButton onClick={shuffle}>
          <DevelopmentIcon name={"Shuffle"} size={"3em"} />
        </SortButton>
      </ButtonContainer>
      <OuterProjectContainer>
        <ProjectContainer>
          {projectData.map((project) => (
            <Div
              layout
              transition={{ type: "spring", bounce: 0.3 }}
              key={project.id}
            >
              <Project projectData={project} key={project.id} />
            </Div>
          ))}
        </ProjectContainer>
      </OuterProjectContainer>
    </ProjectsContainer>
  );
};
