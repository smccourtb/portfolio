import Theme from "./styles/Themes";

import { Greeting } from "./components/Greeting";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import projectsData from "./ProjectsData";
import "./styles/font-styles.css";
import styled, { css } from "styled-components";

const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #fff;
  overflow: hidden;
  background-color: ${({ color }) => color};
  top: ${({ home }) => (home ? `0` : `200%`)};
  transition: all 0.8s cubic-bezier(0.54, 0.35, 0.29, 0.99);
`;

const Navbar = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  margin: auto;
  height: 10%;
  width: 100%;
  padding: 0;
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const NavbarItem = styled.li`
  margin: 30px 0;
  transition: all 0.5s ease-out !important;
  color: #fff;
  font-size: 1em;
  display: block;

  :hover {
    opacity: 0.5;
  }
`;

const ContactContainer = styled.div`
  :target #p1 {
    background: black;
  }

  :target #p1 .icon {
    -webkit-filter: blur(3px);
  }

  :target ${NavbarItem} {
    transform: scale(0.6);
    transition-delay: 0.25s;
  }

  :target #cuatro {
    transform: scale(1.2) !important;
  }

  // this makes the content of the page visible
  :target #p4 .icon {
    transform: translateX(0) !important;
    transition-delay: 1s;
  }

  // this makes the page slide up into view
  :target #p4 {
    transform: translateY(-190%);
    transition-delay: 0.4s !important;
  }
`;

const AboutContainer = styled.div`
  :target #p1 {
    background: black;
  }

  :target #p1 .icon {
    -webkit-filter: blur(3px);
  }

  :target ${NavbarItem} {
    transform: scale(0.6);
    transition-delay: 0.25s;
  }

  :target #dos {
    transform: scale(1.2) !important;
  }

  // this makes the content of the page visible
  :target #p2 .icon {
    transform: translateX(0) !important;
    transition-delay: 1s;
  }

  // this makes the page slide up into view
  :target #p2 {
    transform: translateY(-190%);
    transition-delay: 0.4s !important;
  }
`;

const ProjectsContainer = styled.div`
  :target #p1 {
    background: black;
  }

  :target #p1 .icon {
    -webkit-filter: blur(3px);
  }

  :target ${NavbarItem} {
    transform: scale(0.6);
    transition-delay: 0.25s;
  }

  :target #tres {
    transform: scale(1.2) !important;
  }

  // this makes the content of the page visible
  :target #p3 .icon {
    transform: translateX(0) !important;
    transition-delay: 1s;
  }

  // this makes the page slide up into view
  :target #p3 {
    transform: translateY(-190%);
    transition-delay: 0.4s !important;
  }
`;

function App() {
  return (
    <Theme>
      <div id={"home"}>
        <AboutContainer id={"t2"}>
          <ProjectsContainer id={"t3"}>
            <ContactContainer id={"t4"}>
              <Navbar id={"menu"}>
                <List>
                  <a href={"#home"}>
                    <NavbarItem className="icon" id={"uno"}>
                      Home
                    </NavbarItem>
                  </a>
                  <a href={"#t2"}>
                    <NavbarItem className="icon" id={"dos"}>
                      About
                    </NavbarItem>
                  </a>
                  <a href={"#t3"}>
                    <NavbarItem className="icon" id={"tres"}>
                      Projects
                    </NavbarItem>
                  </a>
                  <a href={"#t4"}>
                    <NavbarItem className="icon" id={"cuatro"}>
                      Contact
                    </NavbarItem>
                  </a>
                </List>
              </Navbar>
              <Page color={"darkslateblue"} home id={"p1"}>
                <Greeting />
              </Page>

              <Page className={"page"} color={"tomato"} id={"p2"}>
                <AboutMe />
              </Page>
              <Page className={"page"} color={"rebeccapurple"} id={"p3"}>
                <Projects data={projectsData} />
              </Page>
              <Page className={"page"} color={"gold"} id={"p4"}>
                <Contact />
              </Page>
            </ContactContainer>
          </ProjectsContainer>
        </AboutContainer>
      </div>
    </Theme>
  );
}

export default App;
