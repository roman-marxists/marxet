import { useState } from "react";
// import { doGetSearchedProducts } from "@api/product";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  return {
    products,
    setProducts,
  };
}
