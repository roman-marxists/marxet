import {
  InputLabel,
  FormControl,
  Select,
  Button,
  MenuItem,
  Box,
} from "@mui/material";

import { useState } from "react";

const Dropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false);

  const categories = ["Yeezy", "KSubi", "Mike", "Kelly", "Kyle"];

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
        Category
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedCategory}
          label="category"
          onChange={handleChange}
          variant="outlined"
        >
          {categories.map((c) => {
            return <MenuItem value={c}>{c}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
