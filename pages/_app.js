import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Box,
  // alpha,
  // InputBase,
} from "@mui/material";
import Link from "next/link";
import SearchBar from "../components/SearchBar.js";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <AppBar
        position="static"
        color="secondary"
        sx={{ backgroundColor: "lightblue" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <div>
            <SearchBar />
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Link href="/products">
        <a> products </a>
      </Link>
      <Link href="/">
        <a> Home</a>
      </Link>
      <h1>this is on every page</h1>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
