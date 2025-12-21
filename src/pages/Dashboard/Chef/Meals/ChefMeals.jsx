import { Edit2, Trash2 } from "lucide-react";
import MealCard from "@/components/Meals/MealCard";
import { meals } from "@/constants";

const ChefMealsPage = () => {
  const chefMeals = meals.filter((m) => m.chefId === "chef001");

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
        <button className="btn btn-primary btn-shine">+ Create New Meal</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chefMeals.length > 0 ? (
          chefMeals.map((meal) => (
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

                <button className="btn btn-sm btn-error">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-base-100 rounded-2xl border border-base-300">
            <p className="text-muted-foreground">
              You haven't created any meals yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefMealsPage;
