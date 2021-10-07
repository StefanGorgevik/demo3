import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import HomePage from './pages/HomePage';
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className="App">
        <HomePage />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
