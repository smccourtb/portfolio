import styled from "styled-components/macro";
import { Greeting } from "./components/Greeting";
import { Header } from "./styles/shared-styles";
import Theme from "./styles/Themes";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.lightShade : colors.darkShade};
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.darkShade : colors.lightShade};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  scroll-snap-align: start;
  padding: 24px;
  font-size: 1em;
`;

function App() {
  return (
    <Theme>
      <Greeting />
      <AboutMe />
      <Projects />
    </Theme>
  );
}

export default App;
