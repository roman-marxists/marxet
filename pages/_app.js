import { Box } from "@mui/material";

import Link from "next/link";

import SearchBar from "../components/SearchBar";
import Header from "../components/Header.js";

import AddListing from "../components/modals/addListingModal.js";

const App = ({ Component, pageProps }) => {
  return (
    <>
    <AddListing />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
      </Box>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>this is on every page</h1>
      <Component {...pageProps} />
      
    </>
  );
};

export default App;
