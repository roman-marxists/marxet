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

const Header = () => {
  return (
    <AppBar className="AppBar" position="static" sx={{ marginBottom: "5vw" }}>
      <Toolbar>
        <Typography>Welcome</Typography>
        <Box sx={{ paddingLeft: "80px", paddingRight: "20px", width: "80%" }}>
          <SearchBar />
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
