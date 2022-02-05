import styled from "styled-components";
import { Container } from "./global/GlobalStyles";

export const Page = styled.div`
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

export const Navbar = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  margin: auto;
  height: 10%;
  width: 100%;
  padding: 0;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const NavbarItem = styled.li`
  margin: 30px 0;
  transition: all 0.5s ease-out !important;
  color: #fff;
  font-size: 1em;
  display: block;

  :hover {
    opacity: 0.5;
  }
`;

export const ContactContainer = styled.div`
  :target #p1 {
    background: black;
  }

  :target #p1 ${Container} {
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
  :target #p4 ${Container} {
    transform: translateX(0) !important;
    transition-delay: 1s;
  }

  // this makes the page slide up into view
  :target #p4 {
    transform: translateY(-190%);
    transition-delay: 0.4s !important;
  }
`;

export const AboutContainer = styled.div`
  :target #p1 {
    background: black;
  }

  :target #p1 ${Container} {
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
  :target #p2 ${Container} {
    transform: translateX(0) !important;
    transition-delay: 1s;
  }

  // this makes the page slide up into view
  :target #p2 {
    transform: translateY(-190%);
    transition-delay: 0.4s !important;
  }
`;

export const ProjectsContainer = styled.div`
  :target #p1 {
    background: black;
  }

  :target #p1 ${Container} {
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
  :target #p3 ${Container} {
    transform: translateX(0) !important;
    transition-delay: 1s;
  }

  // this makes the page slide up into view
  :target #p3 {
    transform: translateY(-190%);
    transition-delay: 0.4s !important;
  }
`;
