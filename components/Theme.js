import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#c7d6d5',
      dark: '#667574',
      contrastText: '#667574'
    },
    secondary: {
      light: '#ffffff',
      main: '#801f12',
      dark: '#343a40',
      contrastText: '#ffffff'
    },
    info: {
      main: '#dbd5d5'
    },
    success: {
      main: '#d1e6e4'
    },
    error: {
      main: '#c62828'
    },
    warning: {
      main: '#801f12'
    }
  }
});