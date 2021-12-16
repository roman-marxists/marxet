import { useState, createContext, useContext } from "react";
import useSearch from "@hooks/useSearch";

const searchContext = createContext();

export function ProvideSearch({ children }) {
  const search = useSearch();
  return (
    <searchContext.Provider value={search}>{children}</searchContext.Provider>
  );
}

export const useSearchContext = () => {
  return useContext(searchContext);
};
