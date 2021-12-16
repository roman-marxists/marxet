import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import { useProductsContext } from "@context/productSearch";
import { doGetSearched } from "@api/product";
import { doGetProducts } from "@api/product";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setProducts, fetchAllProducts } = useProductsContext();

  const handleChange = async (e) => {
    if (e.target.value.length === 0) {
      const data = await doGetProducts();
      setProducts(data);
    }
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getSearchedProducts = await doGetSearched(searchTerm);
      setProducts(getSearchedProducts);
    } catch (err) {
      console.log(err);
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
