import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import MealCard from "@/components/Meals/MealCard";
import PageHeader from "@/components/Shared/Header/PageHeader";
import SearchFilter from "./SearchFilter/SearchFilter";
import { getMeals } from "@/services/MealService";
import CardSkeleton from "@/components/Fallback/CardSkeleton";
import useSearch from "@/hooks/useSearch";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const MealsPage = () => {
  const { limit, skip, sort, order, search, setSkip, setLimit } = useSearch();
  const {
    data = { meals: [], total: 0 },
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["meals", limit, skip, sort, order, search],
    queryFn: () => getMeals(limit, skip, sort, order, search),
    keepPreviousData: true,
  });

  const mealsPerPage = 9;
  const totalPages = Math.ceil(data.total / mealsPerPage);
  const currentPage = Math.floor(skip / limit) + 1;

  const handlePageChange = (page) => {
    setSkip((page - 1) * limit);
  };

  useEffect(() => {
    setLimit(9);
    setSkip(0);
  }, [setLimit, setSkip]);

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
              Showing
              <span className="font-semibold opacity-100 mx-1">
                {data.meals.length}
              </span>
              delicious meals
            </p>
          </div>

          {(!data?.meals || isError) && (
            <div className="text-center my-10 text-base">
              <p>Meals not found, Please try again</p>
            </div>
          )}

          {!isError && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.meals.length > 0 && !isLoading ? (
                data?.meals.map((meal, index) => (
                  <motion.div
                    key={meal._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <MealCard meal={meal} />
                  </motion.div>
                ))
              ) : (
                <CardSkeleton />
              )}
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <div className="join">
              <button
                className="join-item btn"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
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
                onClick={() => handlePageChange(currentPage + 1)}
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
