import { Search, SlidersHorizontal } from "lucide-react";
import Select from "../../../components/common/UI/Select";
import Input from "../../../components/common/UI/Input";

const SearchFilter = () => {
  return (
    <section className="py-6 border-b border-base-300 bg-base-100/95">
      <div className="main-container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="form-control w-full md:w-96">
            <Input
              icon={<Search className="w-5 h-5 text-neutral-500" />}
              placeholder="Search for meals, chefs, or cuisines..."
            ></Input>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Select
              label="Sort by"
              options={[
                "Price: Low to High",
                "Price: High to Low",
                "Highest Rated",
                "Fastest Delivery",
              ]}
            ></Select>
            <Select
              label="Cuisine"
              options={[
                "All Cuisines",
                "Indian",
                "Italian",
                "Thai",
                "Mexican",
                "Japanese",
              ]}
            ></Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
