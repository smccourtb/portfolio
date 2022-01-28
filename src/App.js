import Theme from "./styles/Themes";

import { Greeting } from "./components/Greeting";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import projectsData from "./ProjectsData";
import "./styles/test.css";

function App() {
  return (
    <Theme>
      <div id={"t1"}>
        <div id={"t2"}>
          <div id={"t3"}>
            <div id={"t4"}>
              <ul id={"menu"}>
                <a href={"#t1"}>
                  <li className="icon">Home</li>
                </a>
                <a href={"#t2"}>
                  <li className="icon" id={"dos"}>
                    About
                  </li>
                </a>
                <a href={"#t3"}>
                  <li className="icon" id={"tres"}>
                    Projects
                  </li>
                </a>
                <a href={"#t4"}>
                  <li className="icon" id={"cuatro"}>
                    Contact
                  </li>
                </a>
              </ul>
              <div className={"page"} id={"p1"}>
                <Greeting />
              </div>
              <div className={"page"} id={"p2"}>
                <AboutMe />
              </div>
              <div className={"page"} id={"p3"}>
                <Projects data={projectsData} />
              </div>
              <div className={"page"} id={"p4"}>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default App;
