import { useState, createContext, useContext } from "react";
import useProducts from "@hooks/useProducts";

const productContext = createContext();

export function ProvideSearch({ children }) {
  const products = useProducts();

  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(productContext);
};
