import { theme } from "../../styles/global/Themes";
import {
  Back,
  Button,
  Content,
  Front,
  ProjectContainer,
  ProjectTitle,
} from "../../styles/project-styles";
import { Link } from "react-router-dom";

const pickColor = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

export const Project = ({ projectData }) => {
  const color = pickColor(theme.cardColors);
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
          {Object.keys(links).map((link, idx) =>
            link === "Docs" ? (
              <Button
                color={color}
                key={idx}
                as={Link}
                to={{ pathname: links[link] }}
              >
                {link}
              </Button>
            ) : (
              <Button color={color} key={idx * 12} as={"a"} href={links[link]}>
                {link}
              </Button>
            )
          )}
        </Content>
      </Back>
    </ProjectContainer>
  );
};
