import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const options = ["Profile", "Log out"];

const HeaderMenu = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const menuOpen = Boolean(anchorElement);

  const handleOpen = (e) => {
    setAnchorElement(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorElement(null);
  };

  return (
    <>
      <IconButton
        id="menu-button"
        aria-controls="nav-menu"
        aria-expanded={menuOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        open={menuOpen}
        id="nav-menu"
        anchorEl={anchorElement}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
        onClose={handleClose}
      >
        <Link href="user" passHref>
          <MenuItem key="profile" onClick={handleClose}>
            Profile
          </MenuItem>
        </Link>
        <Link href="/login" passHref>
          <MenuItem key="logout" onClick={handleClose}>
            Log in
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default HeaderMenu;
