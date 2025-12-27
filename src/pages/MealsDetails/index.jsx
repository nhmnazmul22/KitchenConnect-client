import { useParams } from "react-router";
import { motion } from "motion/react";
import { Heart, Award, Loader2 } from "lucide-react";
import MealInfo from "./MealInfo/MealInfo";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import { useQuery } from "@tanstack/react-query";
import { getMealDetails } from "@/services/MealService";
import MealDetailsSkeleton from "@/components/Fallback/MealDetailsSkeleton";
import { getReviewsByMealId } from "@/services/ReviewService";
import { useState } from "react";
import toast from "react-hot-toast";
import { saveIntoFavorite } from "@/services/FavoriteService";

const MealDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const {
    data: meal,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["meal", id],
    queryFn: () => getMealDetails(id),
    keepPreviousData: true,
  });

  const {
    data: mealReviews = [],
    isLoading: reviewsLoading,
    isError: reviewsError,
  } = useQuery({
    queryKey: ["meal-reviews", id],
    queryFn: () => getReviewsByMealId(id),
    keepPreviousData: true,
  });

  const handleFavorite = async () => {
    try {
      setLoading(true);
      const result = await saveIntoFavorite({ mealId: meal._id });
      if (result.success) {
        toast.success("Meal added to favorite");
      } else {
        toast.error(result.message || "Failed added meal into favorite");
      }
    } finally {
      setLoading(false);
    }
  };

  if ((!meal || isLoading) && !isError) {
    return <MealDetailsSkeleton />;
  }

  return (
    <div className="bg-background pt-20">
      <div className="main-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 py-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative max-lg:max-w-md w-full "
          >
            <figure className="aspect-square rounded-3xl overflow-hidden">
              <img
                src={meal.foodImage}
                alt={meal.foodName}
                className="w-full h-full object-cover"
              />
            </figure>
            <button
              onClick={handleFavorite}
              className="btn btn-outline absolute top-4 right-4 text-secondary-content border-white"
            >
              <Heart className="w-5 h-5" />
            </button>
            {meal.rating === 5 && (
              <span className="badge border-0 absolute top-4 left-4 bg-secondary text-secondary-content">
                <Award className="w-3 h-3 mr-1" />
                Top Rated
              </span>
            )}
          </motion.div>
          <MealInfo
            meal={meal}
            mealReviews={mealReviews}
            handleFavorite={handleFavorite}
            loading={loading}
          ></MealInfo>
        </div>

        <CustomerReviews
          mealReviews={mealReviews}
          loading={reviewsLoading}
          error={reviewsError}
          refetch={refetch}
        ></CustomerReviews>
      </div>
    </div>
  );
};

export default MealDetailsPage;
