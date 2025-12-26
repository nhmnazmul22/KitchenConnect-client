import { meals } from "@/constants";
import { Edit2, Trash2 } from "lucide-react";
import MealCard from "@/components/Meals/MealCard";
import { useQuery } from "@tanstack/react-query";
import { deleteMeal, getMyMeals } from "@/services/MealService";
import CardSkeleton from "@/components/Fallback/CardSkeleton";
import { useState } from "react";
import toast from "react-hot-toast";

const MealList = () => {
  const [loading, setLoading] = useState(false);
  const {
    data = { meals: [], total: 0 },
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-meals"],
    queryFn: () => getMyMeals(),
    keepPreviousData: true,
  });

  const handleDelete = async (mealId) => {
    try {
      setLoading(true);
      const result = await deleteMeal(mealId);
      if (result.success) {
        toast.success(result.message || "Meal deleted successful");
        refetch();
        return;
      } else {
        toast.error(result.message || "Meal deleted failed");
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  if (data?.meals?.length === 0 || isError) {
    return (
      <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
        <p className="text-muted-foreground">
          {error?.message || "Meals not found!!"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.meals.length > 0 && !isLoading ? (
        data?.meals.map((meal) => (
          <div key={meal._id} className="relative group">
            <MealCard meal={meal} isChefView />

            <div
              className="absolute inset-0 bg-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300
              rounded-2xl flex items-center justify-center gap-3"
            >
              <button className="btn btn-sm btn-secondary">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </button>

              <button
                onClick={() => handleDelete(meal._id)}
                className="btn btn-sm btn-error"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <CardSkeleton limit={6} />
      )}
    </div>
  );
};

export default MealList;
