import useAuth from "@/hook/useAuth";
import { Navigate, useLocation } from "react-router";

const GuestGuard = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const redirectTo = location.state || "/";

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default GuestGuard;
