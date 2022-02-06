import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

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

export const Container = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: ${({ home }) =>
    home ? `translateY(10%) !important` : `translateY(360%)`};
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
  display: flex;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? `column` : `row`)};
`;
