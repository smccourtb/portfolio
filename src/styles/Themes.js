import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBrand: "#f04d54",
    lightShade: "#F5F6F4",
    lightAccent: "#9CA4AF",
    darkAccent: "#D88958",
    darkShade: "#343540",
  },
  cardColors: {
    green: { primary: "#28b485", secondary: "#7ed56f" },
    yellow: [],
    orange: { primary: "#2998FF", secondary: "#5643FA" },
    blue: { primary: "#FFB900", secondary: "#FF7730" },
    red: [],
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
