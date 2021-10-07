import { createMuiTheme } from "@mui/material/styles";
const lightBeige = "#EAD2A8";

export default createMuiTheme({
  palette: {
    common: {
      lightBeige: lightBeige,

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
