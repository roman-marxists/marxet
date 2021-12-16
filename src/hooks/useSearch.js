import { useState } from "react";
import { doGetSearchedProducts } from "@api/product";

export default function useSearch() {
  const [searchedProducts, setSearchedProducts] = useState([]);

  // const { doGetSearchedProducts } = doGetSearchedProducts;
  // console.log(" do get searched products function", doGetSearchedProducts);

  const handleSearch = async (searchTerm) => {
    const getSearchedProducts = await doGetSearchedProducts(searchTerm);
    console.log(
      "this is the resolved promise of getsearchedproducts",
      getSearchedProducts
    );
    setSearchedProducts(getSearchedProducts);
  };
  return {
    handleSearch,
    searchedProducts,
    setSearchedProducts,
  };
}
