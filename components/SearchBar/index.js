import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  alpha,
  Box,
  InputBase,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          variant="standard"
          label="Search for Products"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
        ></Button>
      </form>
    </Box>
  );
};

export default Search;
