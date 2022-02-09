import Theme from "./styles/global/Themes";
import { Greeting } from "./components/Greeting";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import projectsData from "./ProjectsData";
import "./styles/global/font-styles.css";
import { AnimatePresence } from "framer-motion";
import { Background } from "./styles/app-styles";
import { Route, useLocation } from "react-router-dom";
import { Routes } from "react-router";
import { Container } from "./styles/global/GlobalStyles";
import Layout from "./components/Layout";

function App() {
  let location = useLocation();

  return (
    <Theme>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Greeting />} />
            />
            <Route path={"/about"} element={<AboutMe />} />
            <Route
              path={"/projects"}
              element={<Projects data={projectsData} />}
            />
            <Route path={"/contact"} element={<Contact />} />
          </Route>
          <Route path={"/projects/:name"} element={<Container />} />
          <Route
            path={"*"}
            element={
              <Container
                style={{ transform: "translateY(0%)" }}
                color={"black"}
              >
                <Background style={{ top: "-20%" }}>S</Background>
              </Container>
            }
          />
        </Routes>
      </AnimatePresence>
    </Theme>
  );
}

export default App;
