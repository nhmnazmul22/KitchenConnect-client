import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/Home";
import MealsPage from "../pages/Meals";
import NotFound from "../pages/Errors/NotFound";
import MealDetailsPage from "../pages/MealsDetails";
import LoginPage from "../pages/Auth/Login/Login";
import AuthLayout from "../layout/AuthLayout";
import RegisterPage from "../pages/Auth/Register/Register";
import CreateOrderPage from "../pages/CreateOrder";
import DashboardLayout from "../layout/DashboardLayout";
import ProfilePage from "../pages/Dashboard/User/Profile/Profile";
import OrdersPage from "../pages/Dashboard/User/Orders/Orders";
import ReviewsPage from "../pages/Dashboard/User/Reviews/Reviews";
import FavoritesPage from "../pages/Dashboard/User/Favorite/Favorite";

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
      { path: "create-meal", element: <div>create-meal</div> },
      { path: "my-meals", element: <div>my-meals</div> },
      { path: "order-requests", element: <div>order-requests</div> },
      { path: "users", element: <div>users</div> },
      { path: "requests", element: <div>requests</div> },
      { path: "statistics", element: <div>statistics</div> },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
