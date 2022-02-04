import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: "Raleway", serif;
  }

  html, body {
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
    @media (min-width: 1400px) {
      font-size: 25px;
    }

  }`;
