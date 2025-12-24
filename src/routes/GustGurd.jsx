import useAuth from "@/hook/useAuth";
import { Navigate, useLocation } from "react-router";

const GuestGuard = ({ children }) => {
  const { user, userProfile } = useAuth();
  const location = useLocation();
  const redirectTo = location.state || "/";

  if (user && userProfile) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default GuestGuard;
