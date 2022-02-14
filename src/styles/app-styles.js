import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  position: absolute;
  z-index: 1;
  top: 0;
  margin: auto;
  height: 10%;
  width: 100%;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const NavbarItem = styled(Link)`
  margin: 0.5em 0;
  transition: all 0.5s ease-out !important;
  color: #fff;
  font-size: 1em;
  display: block;

  :hover {
    opacity: 0.5;
  }
`;

export const Background = styled.div`
  font-size: 30em;
  position: absolute;
  opacity: 5%;
  top: -35%;
  left: 0;
  right: 0;
  font-family: "Rock Salt", serif;
  color: whitesmoke;
  filter: blur(3px);
  align-self: center;
`;
