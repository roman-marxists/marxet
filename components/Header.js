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
    <AppBar classname="AppBar" position="static">
      <Toolbar>
        <Typography>Welcome</Typography>
        <Box sx={{ paddingLeft: "80px", paddingRight: "20px", width: "80%" }}>
          <Search />
        </Box>
        <Button color="inherit" variant="outlined">
          Login
        </Button>
        <Button color="inherit" variant="outlined">
          SignUp
        </Button>
      </Toolbar>
    </AppBar>
  );
};

// const ToolBarWrapper = styled.div`
//   ({ theme }) => {
//   }
// `;

export default Header;
