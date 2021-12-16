import { useState } from "react";
// import { doGetSearchedProducts } from "@api/product";

export default function useSearch() {
  const [searchedProducts, setSearchedProducts] = useState([]);

  return {
    searchedProducts,
    setSearchedProducts,
  };
}
