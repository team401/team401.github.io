"use client";

import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      "Helvetica",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Arial",
      "sans-serif",
      "Montserrat",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    primary: {
      main: "#861f41",
    },
    secondary: {
      main: "#d35401",
    },

    background: {
      default: grey[200],
    },
  },
});

export default theme;
