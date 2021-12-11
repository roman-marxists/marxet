import { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";

import '../public/styles.css';
import SearchBar from "../components/SearchBar";
import Header from "../components/Header.js";


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
      </Box>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Component {...pageProps} />
    </>
  );
};

export default App;
