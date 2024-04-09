import React from 'react';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import MyButton from "./components/Button";
import FormSignUp from "./components/Form";
import BasicTable from "./components/Table";
import BasicTableTwo from "./components/AdamSmith";


import { dayTheme, nightTheme } from './theme';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = prefersDarkMode ? nightTheme : dayTheme;

  return (
    <ThemeProvider theme={theme}>
      Hello bro
      <MyButton/>
      <FormSignUp/>
      <BasicTable/>
      <BasicTableTwo/>
    </ThemeProvider>
  );
}

export default App;
