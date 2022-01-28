import styled from "styled-components/macro";

export const Header = styled.h2`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 1.5em;
`;

export const Container = styled.section`
  height: ${({ fullPage }) => (fullPage ? "90%" : "unset")};
  width: 100%;
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.lightShade : colors.darkShade};
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.darkShade : colors.lightShade};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  justify-content: ${({ space }) => (space ? "space-between" : "unset")};

  //scroll-snap-align: start;
  padding: ${({ padding }) => (!padding ? "1.6em" : "unset")};
  font-size: 1em;
`;
