import { useState, useContext, createContext } from "react";

const productContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const value = {
    products,
    setProducts
  }

  return <productContext.Provider value={value}>{children}</productContext.Provider>;
}

export const useProducts = () => {
  return useContext(productContext);
};
