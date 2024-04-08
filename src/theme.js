import { createTheme } from '@mui/material/styles';

const dayTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const nightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export { dayTheme, nightTheme };
