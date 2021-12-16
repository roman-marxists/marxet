import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import { useSearchContext } from "@context/productSearch";
import { doGetSearched } from "@api/product";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchedProducts } = useSearchContext();

  const handleChange = async (e) => {
    try {
      if (e.target.value.length === 0) {
        setSearchedProducts([]);
      }
      const getSearchedProducts = await doGetSearched(e.target.value);
      setSearchedProducts(getSearchedProducts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className="form" sx={{ minWidth: "30%", width: "100%" }}>
      <form>
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
