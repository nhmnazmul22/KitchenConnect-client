import { Loader2, Trash2 } from "lucide-react";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import {
  deleteFavoriteMeal,
  getFavoriteMeals,
} from "@/services/FavoriteService";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const FavoritesPage = () => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const {
    data: favoriteMeals,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-favoriteMeals"],
    queryFn: () => getFavoriteMeals(),
    keepPreviousData: true,
  });

  const handleDelete = async (favoriteId) => {
    try {
      setDeleteLoading(true);
      const result = await deleteFavoriteMeal(favoriteId);
      if (result.success) {
        toast.success(result.message || "Favorite meal remove successful");
        refetch();
        return;
      } else {
        toast.error(result.message || "Favorite meal delete failed");
        return;
      }
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div>
      <DashboardPageHeader
        title="Favorite Meals"
        subTitle="Your saved meals for quick ordering"
      ></DashboardPageHeader>

      {!favoriteMeals && isError && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error.message || "You haven't added meal in favorite."}
          </p>
        </div>
      )}

      {!isError && (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th>Meal Name</th>
                <th>Chef</th>
                <th>Price</th>
                <th>Date Added</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            {favoriteMeals && favoriteMeals.length > 0 && !isLoading ? (
              <tbody>
                {favoriteMeals.map((fav) => (
                  <tr key={fav._id}>
                    <td className="font-medium">{fav.mealName}</td>

                    <td className="text-base-content/70">{fav.chefName}</td>

                    <td className="font-semibold text-primary">
                      ${fav.price.toFixed(2)}
                    </td>

                    <td className="text-base-content/70">
                      {fav.createdAt?.split("T")[0]}
                    </td>

                    <td className="text-right">
                      <button
                        onClick={() => handleDelete(fav._id)}
                        className="btn btn-ghost text-error hover:bg-error/10"
                      >
                        {deleteLoading ? (
                          <Loader2 className="w-4 h-4" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="animate-pulse">
                    <td>
                      <div className="h-4 w-32 bg-base-300 rounded"></div>
                    </td>
                    <td>
                      <div className="h-4 w-24 bg-base-300 rounded"></div>
                    </td>
                    <td>
                      <div className="h-4 w-16 bg-base-300 rounded"></div>
                    </td>
                    <td>
                      <div className="h-4 w-24 bg-base-300 rounded"></div>
                    </td>
                    <td className="text-right">
                      <div className="h-8 w-8 bg-base-300 rounded-full ml-auto"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
