import { Link } from "react-router";
import { Star, Clock, MapPin, Heart } from "lucide-react";

const MealCard = ({ meal, isChefView = false }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <figure className="relative h-48 overflow-hidden">
        <img
          src={meal.image}
          alt={meal.foodName}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-base-content/60 to-transparent" />
        {isChefView && (
          <button className="btn btn-circle btn-sm btn-ghost bg-base-100/90 absolute top-3 right-3 hover:bg-primary hover:text-primary-content">
            <Heart className="w-4 h-4" />
          </button>
        )}

        <div className="badge badge-primary absolute bottom-3 left-3 font-bold">
          ${meal.price.toFixed(2)}
        </div>

        <div className="badge bg-base-100/90 gap-1 absolute bottom-3 right-3">
          <Star className="w-3 h-3 text-warning fill-warning" />
          <span className="font-semibold">{meal.rating}</span>
        </div>
      </figure>

      <div className="card-body p-4 gap-2">
        <h3 className="card-title text-lg font-display group-hover:text-primary transition-colors line-clamp-1">
          {meal.foodName}
        </h3>

        <p className="text-sm opacity-70">
          by <span className="font-medium text-secondary">{meal.chefName}</span>
        </p>

        <div className="flex items-center gap-4 text-xs opacity-60">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{meal.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-30">{meal.deliveryArea}</span>
          </div>
        </div>

        {isChefView && (
          <div className="card-actions mt-2">
            <Link
              to={`/meals/${meal._id}`}
              className="btn btn-primary btn-sm w-full btn-shine"
            >
              See Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;
