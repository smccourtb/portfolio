import { Background, List, Navbar, NavbarItem } from "../styles/app-styles";
import { Container } from "../styles/global/GlobalStyles";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar>
        <List>
          <NavbarItem to={"/"}>Home</NavbarItem>
          <NavbarItem to={"/about"}>About</NavbarItem>
          <NavbarItem to={"/projects"}>Projects</NavbarItem>
          <NavbarItem to={"/contact"}>Contact</NavbarItem>
        </List>
      </Navbar>
      <Container color={"black"}>
        <Background>S</Background>
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
