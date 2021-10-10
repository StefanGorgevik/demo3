import { createMuiTheme } from "@mui/material/styles";
const lightBeige = "#EAD2A8";
const darkBrown = "#382121";
const lightBrown = "#664444";

export default createMuiTheme({
  palette: {
    common: {
      lightBeige,
      darkBrown,
      lightBrown,
      //   blue: arcBlue,
      //   orange: arcOrange,
    },
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#ccc",
    },
  },
  typography: {
    h1: {
      fontFamily: "Rampart One",
    },
    h2: {
      fontFamily: "Rampart One",
    },
  },
});
