import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const ChefRoute = ({ children }) => {
  const { userProfile, signOutUser } = useAuth();
  const location = useLocation();

  if (!userProfile || userProfile.role !== "chef") {
    signOutUser();
    return (
      <Navigate
        to="/auth/login"
        replace
        state={{
          from: location.pathname,
          error: "You are not authorized to access this page",
          status: 401,
        }}
      />
    );
  }

  return children;
};

export default ChefRoute;
