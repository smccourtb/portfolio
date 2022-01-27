import { createGlobalStyle } from "styled-components";
import RalewayWOFF from "../assets/font/Raleway/Raleway-Regular.woff";
import RalewayWOFF2 from "../assets/font/Raleway/Raleway-Regular.woff2";
import PaytoneOneWOFF from "../assets/font/PaytoneOne/PaytoneOne-Regular.woff";
import PaytoneOneWOFF2 from "../assets/font/PaytoneOne/PaytoneOne-Regular.woff2";
import RobotoSlabWOFF from "../assets/font/roboto-slab/RobotoSlab-SemiBold.woff";
import RobotoSlabWOFF2 from "../assets/font/roboto-slab/RobotoSlab-SemiBold.woff2";
import RockSaltWOFF from "../assets/font/rock-salt/RockSalt-Regular.woff";
import RockSaltWOFF2 from "../assets/font/rock-salt/RockSalt-Regular.woff2";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayWOFF2}) format('woff2'),
    url(${RalewayWOFF}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;

  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: "Raleway", serif;

  }

  html, body {
    //scroll-snap-type: y mandatory;
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
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: all .8s cubic-bezier(0.54, 0.35, 0.29, 0.99);

    color: #fff;
    overflow: hidden;
  }

  @font-face {
    font-family: 'Paytone One';
    src: url(${PaytoneOneWOFF2}) format('woff2'),
    url(${PaytoneOneWOFF}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto Slab';
    src: url(${RobotoSlabWOFF2}) format('woff2'),
    url(${RobotoSlabWOFF}) format(' woff ');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Rock Salt';
    src: url(${RockSaltWOFF}) format('woff'),
    url(${RockSaltWOFF2}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;
