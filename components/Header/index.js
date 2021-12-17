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
import { ProductProvider } from "@context/product";

const Header = () => {
  const { user } = useAuth();

  return (
    <Box alignSelf="auto">
      <AppBar position="static" sx={{ background: "#667574" }}>
        <Toolbar component="div" sx={{ cursor: "pointer" }}>
          <Link href="/" passHref>
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
          {user && (
            <>
              <Box mr={3}>
                <ListingModal />
              </Box>
              <UserMenu />
            </>
          )}
          {!user && (
            <Link href="/login">
              <Button
                variant="outlined"
                sx={{ color: "#ffffff", width: "30px" }}
              >
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
    Router.push(`/users/${user?._id}`);
    setShowAccount(false);
  };

  const handleIconClick = (e) => {
    setShowAccount(e.target);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="current-user-account"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleIconClick}
        color="primary"
      >
        <AccountCircle fontSize="large" />
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
        sx={{ width: "30px" }}
      >
        <MenuItem onClick={doRouteToAccount}>Account</MenuItem>
        <MenuItem onClick={doSignOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
