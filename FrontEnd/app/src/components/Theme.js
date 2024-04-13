import { createMuiTheme } from "@material-ui/core/styles";

// Define light color theme
export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffff6b",
      main: "#fdd835",
      dark: "#c6a700",
      contrastText: "#000000"
    },
    secondary: {
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
      contrastText: "#ffffff"
    }
  },
  input: {
    color: "ffffff"
  }
});

// Define dark color theme
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#ffff6b",
      main: "#fdd835",
      dark: "#c6a700",
      contrastText: "#000000"
    },
    secondary: {
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
      contrastText: "#ffffff"
    }
  }
});
