import Theme from "./styles/Themes";

import { Greeting } from "./components/Greeting";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import projectsData from "./ProjectsData";

function App() {
  return (
    <Theme>
      <Greeting />
      <AboutMe />
      <Projects data={projectsData} />
      <Contact />
    </Theme>
  );
}

export default App;
