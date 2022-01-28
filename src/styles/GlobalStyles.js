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
    font-size: 15px;
    //@media (min-width: 600px) {
    //  font-size: 24px;
    //}
    //@media (min-width: 960px) {
    //  font-size: 30px;
    //}
    //@media (min-width: 1280px) {
    //  font-size: 36px;
    //}
    //@media (min-width: 1920px) {
    //  font-size: 42px;
    //}

  }`;
