import { Box, Input, Button } from "@mui/material";
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
    <Box className="form" sx={{ minWidth: "30%", width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <Input
          sx={{ verticalAlign: "baseline", width: "70%", color: "black" }}
          onChange={handleChange}
          placeholder="Search for listings..."
          endAdornment={<SearchIcon />}
        />
        <Button onClick={handleSubmit}>Button</Button>
      </form>
    </Box>
  );
};

export default Search;
