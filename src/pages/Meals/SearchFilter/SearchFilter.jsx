import { Search } from "lucide-react";
import Select from "@/components/common/UI/Select";
import Input from "@/components/common/UI/Input";
import useSearch from "@/hook/useSearch";
import { useState } from "react";

const sortOptions = [
  {
    value: "price-asc",
    label: "Price: Low to High",
  },
  {
    value: "price-desc",
    label: "Price: High to Low",
  },
  {
    value: "rating-desc",
    label: "Highest Rated",
  },
  {
    value: "rating-asc",
    label: "Lowest Rated",
  },
];

const SearchFilter = () => {
  const [sortValue, setSortValue] = useState("price-asc");
  const { search, setSearch, setSort, setOrder } = useSearch();

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
    const [sortVal, orderVal] = e.target.value.split("-");
    if (sortVal) {
      setSort(sortVal);
    }
    if (orderVal) {
      setOrder(orderVal);
    }
  };

  return (
    <section className="py-6 border-b border-base-300 bg-base-100/95">
      <div className="main-container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="form-control w-full md:w-96">
            <Input
              icon={<Search className="w-5 h-5 text-neutral-500" />}
              placeholder="Search meals by name, ingredients or chef name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Select
              label="Sort by"
              options={sortOptions}
              defaultValue={sortValue}
              onChange={handleSortChange}
            ></Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
