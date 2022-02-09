import styled from "styled-components/macro";
import { Container, Header } from "./global/GlobalStyles";

export const Footer = styled.div`
  font-size: 0.5em;
  width: 100%;
  height: 12em;
  position: relative;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: -2.25em;
    left: -2.5em;
    width: 19.5em;
    height: 6em;
    border-radius: 1.5em;
    box-shadow: 10em 10em 0 200em tomato;
  }

  :after {
    content: "";
    position: absolute;
    top: -2em;
    left: -3em;
    width: 20.5em;
    height: 6.25em;
    border-radius: 1.75em;
    box-shadow: 5em 5em 0 100em rgb(52, 53, 64);
    transform: scaleY(-1);
  }
`;

export const Logo = styled.img`
  height: 100%;
  padding: 0 0.5em;
`;

export const ContactContainer = styled(Container)`
  color: black;
`;

export const ContactHeader = styled(Header)`
  color: white;
`;

export const ContactContent = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Opener = styled.p`
  font-size: 0.9em;
  font-weight: bold;
`;

export const Closer = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  padding: 0 40% 1em 1em;
  text-align: left;
`;

export const ContactLinks = styled.div`
  height: 2.5em;
  gap: 0.5em;
  width: 15em;
  margin-top: 0.5em;
  margin-left: 1em;
  justify-content: center;
  z-index: 2;
  position: absolute;
`;
