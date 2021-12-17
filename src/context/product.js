import { useState, useContext, createContext } from "react";

const productContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const value = {
    products,
    searchedProducts,
    setProducts,
    setSearchedProducts
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export const useProducts = () => {
  return useContext(productContext);
};
