import { Link } from "react-router";
import MealList from "./MealList/MealList";

const ChefMealsPage = () => {

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            My Meals
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your published meals
          </p>
        </div>
        <Link to="/dashboard/create-meal">
          <button className="btn btn-primary btn-shine">
            + Create New Meal
          </button>
        </Link>
      </div>

      <MealList />


    </div>
  );
};

export default ChefMealsPage;
