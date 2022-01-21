import styled from "styled-components/macro";
import { DevelopmentIcon } from "./DevelopmentIcon";
import { useState } from "react";

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120%;
  font-size: 1.2em;
`;
const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
`;

const LanguageTitle = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  font-family: "Roboto Slab", serif;
`;

const DevTool = styled.li`
  color: ${({ state, id, theme: { colors } }) =>
    state === id && colors.mainBrand};
  transition: color 0.4s ease-in-out;
  cursor: pointer;
  font-weight: ${({ state, id }) => (state === id ? "bold" : "normal")};
  z-index: ${({ state, id }) => (state === id ? "0" : "1")};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 120%;
`;

export const Tools = ({ data }) => {
  const [state, setState] = useState("");

  const { language, framework } = { ...data };
  const DevIcons = [...language, ...framework].map((icon, idx) => (
    <DevelopmentIcon
      key={idx}
      name={icon}
      state={state}
      size={"2em"}
      setState={setState}
    />
  ));

  const Languages = [...language].map((lang) => (
    <DevTool
      id={lang}
      state={state}
      onMouseEnter={(e) => setState(e.target.id)}
    >
      {lang}
    </DevTool>
  ));

  const Frameworks = [...framework].map((frame) => (
    <DevTool
      id={frame}
      state={state}
      onMouseEnter={(e) => setState(e.target.id)}
    >
      {frame}
    </DevTool>
  ));
  return (
    <>
      <LogoContainer>{DevIcons}</LogoContainer>
      <ListContainer>
        <LanguageList>
          <LanguageTitle>Languages</LanguageTitle>
          <ul style={{ textAlign: "left", listStyleType: "none" }}>
            {Languages}
          </ul>
        </LanguageList>
        <LanguageList>
          <LanguageTitle style={{ alignSelf: "flex-end" }}>
            Frameworks
          </LanguageTitle>
          <ul style={{ textAlign: "right", listStyleType: "none" }}>
            {Frameworks}
          </ul>
        </LanguageList>
      </ListContainer>
    </>
  );
};
