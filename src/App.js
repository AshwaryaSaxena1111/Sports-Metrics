import React from 'react';
import { ThemeProvider, useMediaQuery } from '@mui/material';

import { dayTheme, nightTheme } from './theme';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = prefersDarkMode ? nightTheme : dayTheme;

  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
}

export default App;
