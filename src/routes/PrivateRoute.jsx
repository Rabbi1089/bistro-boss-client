import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const location = useLocation();
  if (user) return children;
  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace={true} />;
  }
};

export default PrivateRoute;
