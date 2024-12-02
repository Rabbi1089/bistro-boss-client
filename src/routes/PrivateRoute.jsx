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
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
  }
};

export default PrivateRoute;
