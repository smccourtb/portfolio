import { theme } from "../../styles/global/Themes";
import { useState } from "react";
import {
  Back,
  Button,
  Content,
  Front,
  ProjectContainer,
  ProjectTitle,
} from "../../styles/project-styles";

const pickColor = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

export const Project = ({ projectData }) => {
  const [color] = useState(pickColor(theme.cardColors));
  const { name, image, links } = { ...projectData };
  return (
    <ProjectContainer>
      <Front image={image} color={color}>
        <Content>
          <ProjectTitle>{name}</ProjectTitle>
        </Content>
      </Front>

      <Back image={image} color={color}>
        <Content>
          {Object.keys(links).map((link, idx) => (
            <Button color={color} key={idx * 12} as={"a"} href={links[link]}>
              {link}
            </Button>
          ))}
        </Content>
      </Back>
    </ProjectContainer>
  );
};
