import { Loader2, Trash2 } from "lucide-react";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import {
  deleteFavoriteMeal,
  getFavoriteMeals,
} from "@/services/FavoriteService";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useSearch from "@/hooks/useSearch";
import Pagination from "@/components/common/UI/Pagination";

const FavoritesPage = () => {
  const { limit, skip, setLimit, setSkip } = useSearch();
  const [deleteId, setDeleteId] = useState(null);

  const {
    data = { meals: [], total: 0 },
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-favoriteMeals", limit, skip],
    queryFn: () => getFavoriteMeals(limit, skip),
    keepPreviousData: true,
  });

  const handleDelete = async (favoriteId) => {
    try {
      setDeleteId(favoriteId);
      const result = await deleteFavoriteMeal(favoriteId);

      if (result.success) {
        toast.success(result.message || "Favorite meal removed successfully");
        refetch();
      } else {
        toast.error(result.message || "Favorite meal delete failed");
      }
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    setLimit(10);
    setSkip(0);
  }, [setLimit, setSkip]);

  if (isError) {
    return (
      <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
        <p className="text-base-content/70">
          {error?.message || "You haven't added any favorite meals yet."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <DashboardPageHeader
        title="Favorite Meals"
        subTitle="Your saved meals for quick ordering"
      />

      {isLoading && (
        <div className="bg-base-100 border border-base-content/5 rounded-2xl p-4 space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-16 bg-base-300 rounded-xl animate-pulse"
            />
          ))}
        </div>
      )}

      {!isLoading && data.meals.length > 0 && (
        <div className="hidden md:block overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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

            <tbody>
              {data.meals.map((fav) => (
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
                      {deleteId === fav._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!isLoading && data.meals.length > 0 && (
        <div className="md:hidden space-y-4 mt-4">
          {data.meals.map((fav) => (
            <div
              key={fav._id}
              className="border border-base-content/10 bg-base-100 rounded-xl p-4 space-y-3"
            >
              <div>
                <p className="font-semibold">{fav.mealName}</p>
                <p className="text-sm text-base-content/70">
                  Chef: {fav.chefName}
                </p>
              </div>

              <div className="flex justify-between text-sm">
                <span>Price</span>
                <span className="font-semibold text-primary">
                  ${fav.price.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Date Added</span>
                <span className="text-base-content/70">
                  {fav.createdAt?.split("T")[0]}
                </span>
              </div>

              <button
                onClick={() => handleDelete(fav._id)}
                className="btn btn-sm btn-outline btn-error w-full"
              >
                {deleteId === fav._id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      {!isLoading && !isError && (
        <div className="mt-6">
          <Pagination total={data?.total} />
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
