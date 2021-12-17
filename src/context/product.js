import { useState, useContext, useEffect, createContext } from "react";
import { doGetProducts } from "@api/product";

const productContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await doGetProducts();
        setProducts(data ? data : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const value = {
    products,
    searchedProducts,
    setProducts,
    setSearchedProducts,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export const useProducts = () => {
  return useContext(productContext);
};
