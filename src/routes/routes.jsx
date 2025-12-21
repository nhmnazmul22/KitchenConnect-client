import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "@/layout/RootLayout";
import HomePage from "@/pages/Home";
import MealsPage from "@/pages/Meals";
import NotFound from "@/pages/Errors/NotFound";
import MealDetailsPage from "@/pages/MealsDetails";
import LoginPage from "@/pages/Auth/Login/Login";
import AuthLayout from "@/layout/AuthLayout";
import RegisterPage from "@/pages/Auth/Register/Register";
import CreateOrderPage from "@/pages/CreateOrder";
import DashboardLayout from "@/layout/DashboardLayout";
import ProfilePage from "@/pages/Dashboard/Profile/Profile";
import OrdersPage from "@/pages/Dashboard/User/Orders/Orders";
import ReviewsPage from "@/pages/Dashboard/User/Reviews/Reviews";
import FavoritesPage from "@/pages/Dashboard/User/Favorite/Favorite";
import CreateMealPage from "@/pages/Dashboard/Chef/CreateMeal/CreateMeal";
import ChefMealsPage from "@/pages/Dashboard/Chef/Meals/ChefMeals";
import OrderRequestsPage from "@/pages/Dashboard/Chef/OrderRequests/OrderRequest";
import ManageUsersPage from "@/pages/Dashboard/Admin/ManageUsers/ManageUsers";
import RoleRequestsPage from "@/pages/Dashboard/Admin/RoleRequests/RoleRequests";
import StatisticsPage from "@/pages/Dashboard/Admin/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      { path: "/meals", element: <MealsPage></MealsPage> },
      { path: "/meals/:id", element: <MealDetailsPage></MealDetailsPage> },
      { path: "/create-order", element: <CreateOrderPage></CreateOrderPage> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      { path: "login", element: <LoginPage></LoginPage> },
      { path: "register", element: <RegisterPage></RegisterPage> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/profile"></Navigate>,
      },
      { path: "profile", element: <ProfilePage></ProfilePage> },
      { path: "orders", element: <OrdersPage></OrdersPage> },
      { path: "reviews", element: <ReviewsPage></ReviewsPage> },
      { path: "favorites", element: <FavoritesPage></FavoritesPage> },
      { path: "create-meal", element: <CreateMealPage></CreateMealPage> },
      { path: "my-meals", element: <ChefMealsPage></ChefMealsPage> },
      {
        path: "order-requests",
        element: <OrderRequestsPage></OrderRequestsPage>,
      },
      { path: "users", element: <ManageUsersPage></ManageUsersPage> },
      { path: "requests", element: <RoleRequestsPage></RoleRequestsPage> },
      { path: "statistics", element: <StatisticsPage></StatisticsPage> },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
