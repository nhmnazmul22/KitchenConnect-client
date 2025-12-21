import { useParams } from "react-router";
import { motion } from "motion/react";
import { Heart, Award } from "lucide-react";
import { meals, reviews } from "@/constants";
import MealInfo from "./MealInfo/MealInfo";
import CustomerReviews from "./CustomerReviews/CustomerReviews";

const MealDetailsPage = () => {
  const { id } = useParams();
  const meal = meals.find((m) => m._id === id) || meals[0];
  const mealReviews = reviews.filter((r) => r.foodId === meal._id);

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
                src={meal.image}
                alt={meal.foodName}
                className="w-full h-full object-cover"
              />
            </figure>
            <button className="btn btn-outline absolute top-4 right-4 text-secondary-content border-white">
              <Heart className="w-5 h-5" />
            </button>
            <span className="badge border-0 absolute top-4 left-4 bg-secondary text-secondary-content">
              <Award className="w-3 h-3 mr-1" />
              Top Rated
            </span>
          </motion.div>
          <MealInfo meal={meal} mealReviews={mealReviews}></MealInfo>
        </div>

        <CustomerReviews mealReviews={mealReviews}></CustomerReviews>
      </div>
    </div>
  );
};

export default MealDetailsPage;
