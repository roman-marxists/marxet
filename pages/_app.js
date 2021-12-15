import { Box, createTheme, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import '../public/styles.css';
import Header from '../components/Header';
import firebase from '@services/firebase';

const Theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#c7d6d5',
      dark: '#667574',
      contrastText: '#667574',
    },
    secondary: {
      light: '#ffffff',
      main: '#801f12',
      dark: '#343a40',
      contrastText: '#ffffff',
    },
    info: {
      main: '#dbd5d5',
    },
    success: {
      main: '#d1e6e4',
    },
    error: {
      main: '#c62828',
    },
    warning: {
      main: '#801f12',
    },
  },
});

import { useEffect } from "react";

import "../public/styles.css";
// import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import SearchPage from "../features/Search/SearchPage.js";
import AddListing from "../components/modals/addListingModal.js";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#c7d6d5",
      dark: "#667574",
      contrastText: "#667574",
    },
    secondary: {
      light: "#ffffff",
      main: "#801f12",
      dark: "#343a40",
      contrastText: "#ffffff",
    },
    info: {
      main: "#dbd5d5",
    },
    success: {
      main: "#d1e6e4",
    },
    error: {
      main: "#c62828",
    },
    warning: {
      main: "#801f12",
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
      </Box>
      <Link href='/products/1'>
        <a>Search</a>
      </Link>
      <Link href='/'>
        <a>Home</a>
      </Link>{' '}
      <Link href='/user/1'>
        <a>User 1</a>
      </Link>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
