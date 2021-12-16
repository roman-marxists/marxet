import { Box, Input, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import { useSearchContext } from "@context/productSearch";
import { doGetSearchedProducts } from "@api/product";

const Search = () => {
  // console.log("use search context", useSearchContext);
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchedProducts, setSearchedProducts] = useState(useSearchContext);
  // console.log(searchedProducts);
  // const getSearched = doGetSearchedProducts();
  console.log(doGetSearchedProducts);

  console.log("useSearchContext is undefined?", useSearchContext());

  const {
    handleSearch,
    searchedProducts,
    setSearchedProducts,
  } = useSearchContext();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (event) => {
    // handleSearch(searchTerm);
    try {
      const getSearchedProducts = await doGetSearchedProducts(searchTerm);
      console.log(
        "this is the resolved promise of getsearchedproducts",
        getSearchedProducts
      );
      setSearchedProducts(getSearchedProducts);
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
        <Button onClick={handleSubmit}>Button</Button>
      </form>
    </Box>
  );
};

export default Search;
