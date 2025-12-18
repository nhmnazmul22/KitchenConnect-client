import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      { path: "/meals", element: <div>Meals page</div> },
      { path: "/meals/:id", element: <div>Meals details page</div> },
      { path: "/create-order", element: <div>Create Order page</div> },
    ],
  },
  {
    path: "/auth",
    element: <div>Auth Layout</div>,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      { path: "login", element: <div>Login Page</div> },
      { path: "register", element: <div>Register Page</div> },
    ],
  },
  {
    path: "/dashboard",
    element: <div>dashboard Layout</div>,
    children: [
      {
        index: true,
        element: <div>Dashboard</div>,
      },
      { path: "profile", element: <div>profile</div> },
      { path: "orders", element: <div>orders</div> },
      { path: "reviews", element: <div>reviews</div> },
      { path: "favorites", element: <div>favorites</div> },
      { path: "create-meal", element: <div>create-meal</div> },
      { path: "my-meals", element: <div>my-meals</div> },
      { path: "order-requests", element: <div>order-requests</div> },
      { path: "users", element: <div>users</div> },
      { path: "requests", element: <div>requests</div> },
      { path: "statistics", element: <div>statistics</div> },
    ],
  },
  { path: "*", element: <div>Error Page</div> },
]);

export default router;
