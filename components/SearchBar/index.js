import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext, useEffect } from "react";
import { doGetSearched } from "@api/product";
import { useProducts } from "@context/product";
import { DisabledByDefault } from "@mui/icons-material";
import { doGetProducts } from "@api/product";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setProducts } = useProducts();

  const fetchProducts = async () => {
    try {
      const data = await doGetProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm.length === 0) {
      fetchProducts();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getSearchedProducts = await doGetSearched(searchTerm);
      setProducts(getSearchedProducts);
    } catch (err) {
      console.log(err);
    } finally {
      setSearchTerm("");
    }
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
      </form>
    </Box>
  );
};

export default Search;
