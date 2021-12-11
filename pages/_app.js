import { Box } from "@mui/material";

import Link from "next/link";

import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import SearchPage from "../features/Search/SearchPage.js";

import { useState } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
      </Box>
      <SearchPage />
      <Component {...pageProps} />
    </>
  );
};

export default App;
