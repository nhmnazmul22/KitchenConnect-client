import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import MealCard from "../../components/Meals/MealCard";
import { meals } from "../../constants";
import PageHeader from "../../components/Shared/Header/PageHeader";
import SearchFilter from "./SearchFilter/SearchFilter";

const MealsPage = () => {
  const [currentPage] = useState(1);
  const mealsPerPage = 9;
  const totalPages = Math.ceil(meals.length / mealsPerPage);

  const displayedMeals = meals;

  return (
    <div className="bg-base-1000">
      <PageHeader
        title="Discover Delicious"
        gradientTitle="Home-Cooked Meals"
        subTitle="Browse through our selection of authentic, freshly prepared meals from local chefs in your area."
      ></PageHeader>
      <SearchFilter></SearchFilter>

      <section className="py-12">
        <div className="main-container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="opacity-70">
              Showing{" "}
              <span className="font-semibold opacity-100">
                {displayedMeals.length}
              </span>{" "}
              delicious meals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMeals.map((meal, index) => (
              <motion.div
                key={meal._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <MealCard meal={meal} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="join">
              <button className="join-item btn" disabled={currentPage === 1}>
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`join-item btn ${
                      currentPage === page ? "btn-primary" : ""
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                className="join-item btn"
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealsPage;
