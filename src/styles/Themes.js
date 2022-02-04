import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    mainBrand: "#f04d54",
    lightShade: "#F5F6F4",
    lightAccent: "#9CA4AF",
    darkAccent: "#D88958",
    darkShade: "#343540",
  },
  cardColors: {
    green: { primary: "#28b485", secondary: "#7ed56f" },
    blue: { primary: "#2998FF", secondary: "#4368fa" },
    orange: { primary: "#FFB900", secondary: "#f57d3e" },
    // black: { primary: "#000", secondary: "#333333" },
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
