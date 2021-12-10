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

import Search from "./SearchBar";

const Header = () => {
  return (
    <Box
      sx={{
        opacity: 0.5,
        // display: "flex",
        // flexdirection: "row",
        // justifycontent: "space-evenly",
        // alignitems: "baseline",
        alignself: "auto",
      }}
    >
      <AppBar position="static">
        <Toolbar component="div">
          <Typography>Welcome</Typography>
          <Search />
          <Button color="inherit" variant="outlined">
            Login
          </Button>
          <Button color="inherit" variant="outlined">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// const ToolBarWrapper = styled.div`
//   ({ theme }) => {
//   }
// `;

export default Header;
