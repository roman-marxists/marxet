import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import Search from "@components/SearchBar";
import ListingModal from "@components/modals/ListingModal";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useAuth } from "@context/auth";
import Router from "next/router";

const Header = () => {
  const { user } = useAuth();

  return (
    <Box
      alignSelf="auto"
      sx={{
        color: "#667574",
      }}
    >
      <AppBar position="static" sx={{background: "#667574"}}>
        <Toolbar component="div" sx={{ cursor: "pointer" }}>
          <Link href="/">
            <Box
              className="logo"
              style={{ color: "#ffffff" }}
              mr={5}
              fontSize={24}
            >
              Marxet
            </Box>
          </Link>
          <Search />
          {/* <Dropdown /> */}
          {user ? (
            <>
              <Box mr={5}>
                <ListingModal />
              </Box>
              <UserMenu />
            </>
          ) : (
            <Link href="/login">
              <Button color="inherit" variant="outlined" sx={{color: "white", width: "30px"}}>
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const UserMenu = () => {
  const { signout, user } = useAuth();
  const [showAccount, setShowAccount] = useState(false);

  const doSignOut = async () => {
    await signout();
    setShowAccount(false);
  };

  const doRouteToAccount = () => {
    Router.push(`/users/${user.uid}`);
    setShowAccount(false);
  };


  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => setShowAccount(e.target)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={showAccount}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => setShowAccount(false)}
        open={showAccount}
        sx={{width: "30px"}}
      >
        <MenuItem onClick={doRouteToAccount}>Account</MenuItem>
        <MenuItem onClick={doSignOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
