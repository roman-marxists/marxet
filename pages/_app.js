import Link from "next/link";
import firebase from "@services/firebase";
import { useEffect } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "../public/styles.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import AddListing from "../components/modals/addListingModal.js";
import SearchPage from "../features/Search/SearchPage.js";
import ProductMap from "../features/ProductMap/index.js";

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
    <>
    <AddListing />
    </>
  );
};

export default App;
