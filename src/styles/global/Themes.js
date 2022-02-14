import React from "react";
import { ThemeProvider } from "styled-components/macro";

export const theme = {
  cardColors: {
    green: { primary: "#28b485", secondary: "#7ed56f" },
    blue: { primary: "#2998FF", secondary: "#4368fa" },
    orange: { primary: "#FFB900", secondary: "#f57d3e" },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
