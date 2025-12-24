import {
  Clock,
  MapPin,
  Heart,
  ChefHat,
  ShoppingCart,
  Leaf,
  Loader2,
} from "lucide-react";
import Stars from "@/components/common/UI/Stars";
import { motion } from "motion/react";
import { Link } from "react-router";

const MealInfo = ({ meal, mealReviews, loading, handleFavorite }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-0.5">{Stars(meal.rating)}</div>
          <span className="text-sm text-muted-foreground">
            ({meal.rating}) • {mealReviews?.length} reviews
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          {meal.foodName}
        </h1>
      </div>

      <p className="text-muted-foreground text-lg leading-relaxed">
        {meal.description}
      </p>

      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <ChefHat className="w-7 h-7 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">{meal.chefName}</p>
          <p className="text-sm text-muted-foreground">
            Chef ID: #{meal.chefId} • {meal.chefExperience} experience
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card bg-background shadow-sm p-4 rounded-xl border border-neutral-200">
          <Clock className="w-5 h-5 text-primary mb-2" />
          <p className="text-sm text-muted-foreground">Delivery Time</p>
          <p className="font-semibold text-foreground">
            {meal.estimatedDeliveryTime}
          </p>
        </div>
        <div className="card bg-base-100 shadow-sm p-4 rounded-xl border border-neutral-200">
          <MapPin className="w-5 h-5 text-primary mb-2" />
          <p className="text-sm text-muted-foreground">Delivery Area</p>
          <p className="font-semibold text-foreground truncate">
            {meal.deliveryArea}
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Leaf className="w-5 h-5 text-secondary" />
          Ingredients
        </h3>
        <div className="flex flex-wrap gap-2">
          {meal.ingredients.map((ingredient) => (
            <span
              key={ingredient}
              variant="secondary"
              className="badge bg-secondary/10 text-secondary hover:bg-secondary/20"
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-sm:gap-3 items-center justify-between p-6 bg-primary/5 rounded-2xl border border-primary/20">
        <div>
          <p className="text-sm text-muted-foreground">Price per serving</p>
          <p className="text-3xl font-bold text-primary">
            ${meal.price.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleFavorite} className="btn btn-outline">
            {loading ? (
              <Loader2 className="w-4 h-4 mr-2" />
            ) : (
              <>
                <Heart className="w-4 h-4 mr-2" />
                <span>Favorite</span>
              </>
            )}
          </button>
          <Link to={`/create-order?mealId=${meal._id}`}>
            <button className="btn btn-primary btn-shine">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MealInfo;
