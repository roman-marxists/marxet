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

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <Box className="form" sx={{ minWidth: "40%" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ verticalAlign: "baseline", width: "30%" }}
          onChange={handleChange}
          variant="standard"
          label="Search for Products"
        />
        <Box
          className="TextField"
          sx={{
            display: "inline-flex",
            paddingLeft: "20px",
          }}
        >
          <Button
            sx={{ justifyContent: "flex-end" }}
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
          ></Button>
        </Box>
      </form>
    </Box>
  );
};

export default SearchBar;
