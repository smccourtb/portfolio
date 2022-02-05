import Theme from "./styles/global/Themes";
import { Greeting } from "./components/Greeting";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import projectsData from "./ProjectsData";
import "./styles/global/font-styles.css";
import {
  AboutContainer,
  ContactContainer,
  List,
  Navbar,
  NavbarItem,
  Page,
  ProjectsContainer,
} from "./styles/app-styles";

function App() {
  return (
    <Theme>
      <div id={"home"}>
        <AboutContainer id={"about"}>
          <ProjectsContainer id={"projects"}>
            <ContactContainer id={"contact"}>
              <Navbar id={"menu"}>
                <List>
                  <a href={"#home"}>
                    <NavbarItem id={"uno"}>Home</NavbarItem>
                  </a>
                  <a href={"#about"}>
                    <NavbarItem id={"dos"}>About</NavbarItem>
                  </a>
                  <a href={"#projects"}>
                    <NavbarItem id={"tres"}>Projects</NavbarItem>
                  </a>
                  <a href={"#contact"}>
                    <NavbarItem id={"cuatro"}>Contact</NavbarItem>
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
