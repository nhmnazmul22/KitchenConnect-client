import { Trash2 } from "lucide-react";
import { favorites } from "../../../../constants";
import DashboardPageHeader from "../../../../components/Shared/Header/DashboardPageHeader";

const FavoritesPage = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Favorite Meals"
        subTitle="Your saved meals for quick ordering"
      ></DashboardPageHeader>

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

          <tbody>
            {favorites.map((fav) => (
              <tr key={fav._id}>
                <td className="font-medium">{fav.mealName}</td>

                <td className="text-base-content/70">{fav.chefName}</td>

                <td className="font-semibold text-primary">
                  ${fav.price.toFixed(2)}
                </td>

                <td className="text-base-content/70">{fav.dateAdded}</td>

                <td className="text-right">
                  <button className="btn btn-ghost text-error hover:bg-error/10">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {favorites.length === 0 && (
        <div className="text-center py-12 bg-card rounded-2xl border border-border">
          <p className="text-muted-foreground">
            You haven't added any favorites yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
