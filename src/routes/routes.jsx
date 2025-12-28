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
import GuestGuard from "./GustGurd";
import PrivateRoute from "./PrivateRoute";
import UserRoute from "./UserRoute";
import ChefRoute from "./ChefRoute";
import AdminRoute from "./AdminRoute";
import SuccessPage from "@/pages/Payments/Success/SuccessPage";
import FailedPage from "@/pages/Payments/Failed/FailedPage";
import CancelPage from "@/pages/Payments/Cancel/CancelPage";
import { ErrorBoundary } from "@/pages/Errors/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorBoundary></ErrorBoundary>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      { path: "/meals", element: <MealsPage></MealsPage> },
      {
        path: "/meals/:id",
        element: (
          <PrivateRoute>
            <MealDetailsPage></MealDetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-order",
        element: (
          <PrivateRoute>
            <UserRoute>
              <CreateOrderPage></CreateOrderPage>
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-success",
        element: (
          <PrivateRoute>
            <UserRoute>
              <SuccessPage></SuccessPage>
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-failed",
        element: (
          <PrivateRoute>
            <UserRoute>
              <FailedPage></FailedPage>
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-cancel",
        element: (
          <PrivateRoute>
            <UserRoute>
              <CancelPage></CancelPage>
            </UserRoute>
          </PrivateRoute>
        ),
      },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
  {
    path: "/auth",
    element: (
      <GuestGuard>
        <AuthLayout></AuthLayout>
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      { path: "login", element: <LoginPage></LoginPage> },
      { path: "register", element: <RegisterPage></RegisterPage> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/profile"></Navigate>,
      },
      { path: "profile", element: <ProfilePage></ProfilePage> },
      {
        path: "orders",
        element: (
          <UserRoute>
            <OrdersPage></OrdersPage>
          </UserRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <UserRoute>
            <ReviewsPage></ReviewsPage>
          </UserRoute>
        ),
      },
      {
        path: "favorites",
        element: (
          <UserRoute>
            <FavoritesPage></FavoritesPage>
          </UserRoute>
        ),
      },
      {
        path: "create-meal",
        element: (
          <ChefRoute>
            <CreateMealPage></CreateMealPage>
          </ChefRoute>
        ),
      },
      {
        path: "my-meals",
        element: (
          <ChefRoute>
            <ChefMealsPage></ChefMealsPage>
          </ChefRoute>
        ),
      },
      {
        path: "order-requests",
        element: (
          <ChefRoute>
            <OrderRequestsPage></OrderRequestsPage>
          </ChefRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <ManageUsersPage></ManageUsersPage>
          </AdminRoute>
        ),
      },
      {
        path: "requests",
        element: (
          <AdminRoute>
            <RoleRequestsPage></RoleRequestsPage>
          </AdminRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <AdminRoute>
            <StatisticsPage></StatisticsPage>
          </AdminRoute>
        ),
      },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

export default router;
