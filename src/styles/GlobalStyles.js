import { createGlobalStyle } from "styled-components";
import RalewayWOFF from "../assets/font/Raleway/Raleway-Regular.woff";
import RalewayWOFF2 from "../assets/font/Raleway/Raleway-Regular.woff2";
import PaytoneOneWOFF from "../assets/font/PaytoneOne/PaytoneOne-Regular.woff";
import PaytoneOneWOFF2 from "../assets/font/PaytoneOne/PaytoneOne-Regular.woff2";
import RobotoSlabWOFF from "../assets/font/roboto-slab/RobotoSlab-SemiBold.woff";
import RobotoSlabWOFF2 from "../assets/font/roboto-slab/RobotoSlab-SemiBold.woff2";

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
    font-size: 15px;
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
`;
