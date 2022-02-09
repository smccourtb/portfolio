import styled, { createGlobalStyle } from "styled-components/macro";

import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: "Raleway", serif;
  }

  html, body {
    width: 100%;
    height: 100%;
    color: #fff;
    overflow: hidden;
    font-size: 13px;
    @media (min-width: 375px) {
      font-size: 15px;
    }
    @media (min-width: 576px) {
      font-size: 17px;
    }
    @media (min-width: 992px) {
      font-size: 19px;
    }
    @media (min-width: 1200px) {
      font-size: 21px;
    }


    a {
      text-decoration: none;
    }
  }`;

export const Header = styled.h2`
  font-family: "Rock Salt", serif;
  font-weight: 700;
  font-size: 3em;
  opacity: 15%;
  top: -4%;
  right: 0;
  position: absolute;
`;

export const Container = styled(motion.section)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  transform: translateY(10%);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? `column` : `row`)};
`;

export const transition = {
  type: "spring",
  stiffness: 45,
};

export const variants = {
  exit: { y: "100%", transition },
  enter: {
    y: "10%",
    opacity: 1,
    transition,
  },
};
