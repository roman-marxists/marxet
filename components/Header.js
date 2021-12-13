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
import Link from "next/link";
import Search from "./SearchBar";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexdirection: "row",
        // justifycontent: "space-evenly",
        // alignitems: "baseline",
        alignSelf: "auto",
        color: "#c7d6d5",
      }}
    >
      <AppBar position="static">
        <Toolbar component="div">
          <div className="logo" style={{ color: "#801f12" }}>
            Marxet
          </div>
          <Search />
          <Dropdown />
          <Link href="/login">
            <Button color="inherit" variant="outlined">
              Login
            </Button>
          </Link>
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
