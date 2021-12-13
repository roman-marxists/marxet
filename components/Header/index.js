import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Box,
  alpha,
  InputBase,
} from "@mui/material";

import SearchBar from "../SearchBar";
import Dropdown from "../Dropdown";

const Header = () => {
  return (
    <AppBar className="AppBar" position="static" sx={{ marginBottom: "5vw" }}>
      <Toolbar>
        <Typography>Welcome</Typography>
        <Box
          className="SearchBar"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: "8vw",
            paddingRight: "5vw",
            width: "30%",
          }}
        >
          <SearchBar />
          <Dropdown />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
