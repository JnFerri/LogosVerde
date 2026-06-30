import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface TypeBackground {
    linearGreen: string;
    cream: string;
    green: string;
  }

  interface TypeText {
    grey: string;
  }
}

const primaryGreen = "#6e9662";
const linearGreen = "linear-gradient(135deg, #6e9662 0%, #4a6343 100%)";
const beige = "#d6b696";

const cream = "#f7f0e4";
const paper = "#ededed";
const errorRed = "#bf4141";
const borderLight = "#cccccc";

const lightGrey = "#9e9e9e";

const textPrimary: string = "#000000";
const textSecondary: string = "#ededed";
const textDisabled: string = "#b5b5b5";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryGreen,
    },
    secondary: {
      main: beige,
    },
    error: {
      main: errorRed,
    },
    background: {
      cream: cream,
      default: beige,
      green: primaryGreen,
      linearGreen: linearGreen,
      paper: paper,
    },
    divider: borderLight,
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: textDisabled,
      grey: lightGrey,
    },
  },
  typography: {
    fontFamily: ['"Akt", sans-serif'].join(","),
  },
});
