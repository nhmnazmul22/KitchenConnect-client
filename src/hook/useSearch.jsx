import SearchContext from "@/context/SearchContext/SearchContext";
import { useContext } from "react";

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within an AuthProvider");
  }

  return context;
};

export default useSearch;
