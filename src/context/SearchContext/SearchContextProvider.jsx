import { useState } from "react";
import MealSearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);
  const [sort, setSort] = useState("createAt");
  const [order, setOrder] = useState("desc");
  const [search, setSearch] = useState("");

  const searchValues = {
    limit,
    skip,
    sort,
    order,
    search,
    setLimit,
    setSkip,
    setSort,
    setOrder,
    setSearch,
  };

  return (
    <MealSearchContext.Provider value={searchValues}>
      {children}
    </MealSearchContext.Provider>
  );
};

export default SearchContextProvider;
