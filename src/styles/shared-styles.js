import styled from "styled-components/macro";

export const Header = styled.h2`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 36px;
`;

export const Container = styled.section`
  height: ${({ fullPage }) => (fullPage ? "100vh" : "unset")};
  min-height: 100vh;
  width: 100%;
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.lightShade : colors.darkShade};
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.darkShade : colors.lightShade};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  scroll-snap-align: start;
  padding: 24px;
  font-size: 1em;
`;
