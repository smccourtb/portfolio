import Theme from "./styles/Themes";

import { Greeting } from "./components/Greeting";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import projectsData from "./ProjectsData";
import styled from "styled-components/macro";
import "./styles/test.css";
import { css } from "styled-components";

const MenuItems = styled.li`
  margin: 1.5em 0;
  transition: all 0.5s ease-out !important;
  color: #fff;
  font-size: 1em;
  display: block;

  :hover {
    opacity: 0.5;
  }
`;
const TargetContainer = styled.div`
  ${({ target }) =>
    target &&
    css`
      :target ${target} {
        transform: translateY(209.5%);
        transition-delay: 0.4s;
      }

      :target #greeting {
        -webkit-filter: blur(3px);
        background: black;
      }
    `}
  ${({ navTarget }) =>
    navTarget
      ? css`
          :target ${navTarget} {
            transform: scale(1.1);
          }
        `
      : `transform: scale(1)`}
  :target ${MenuItems} {
    transform: scale(0.6);
    transition-delay: 0.25s;
  }
`;

const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all 0.8s cubic-bezier(0.54, 0.35, 0.29, 0.99);
  color: #fff;
  overflow: hidden;
  top: ${({ first }) => (first ? "9.99%" : "-200%")};
`;

const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  top: 0;
  /*bottom: 0;*/
  left: 0;
  right: 0;
  margin: auto;
  height: 10%;
  width: 100%;
  padding: 0 1em;
  text-align: center;
  background-color: #343540;
  display: flex;
  justify-content: space-around;
  gap: 1em;
  border-bottom: 2px solid #f04d54;
`;

function App() {
  return (
    <Theme>
      <TargetContainer id={"t1"}>
        <TargetContainer target={"#p2"} navTarget={"#about"} id={"t2"}>
          <TargetContainer target={"#p3"} navTarget={"#projects"} id={"t3"}>
            <TargetContainer target={"#p4"} navTarget={"#contact"} id={"t4"}>
              <Menu id={"menu"}>
                <a href={"#t1"}>
                  <MenuItems id="home">Home</MenuItems>
                </a>
                <a href={"#t2"}>
                  <MenuItems id="about">About</MenuItems>
                </a>
                <a href={"#t3"}>
                  <MenuItems id="projects">Projects</MenuItems>
                </a>
                <a href={"#t4"}>
                  <MenuItems id="contact">Contact</MenuItems>
                </a>
              </Menu>
              <Page id={"p1"} first>
                <Greeting bgColor={"darkslateblue"} />
              </Page>
              <Page id={"p2"}>
                <AboutMe />
              </Page>
              <Page id={"p3"}>
                <Projects data={projectsData} />
              </Page>
              <Page id={"p4"}>
                <Contact />
              </Page>
            </TargetContainer>
          </TargetContainer>
        </TargetContainer>
      </TargetContainer>
    </Theme>
  );
}

export default App;
