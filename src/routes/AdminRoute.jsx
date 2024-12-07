import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth()
    const { isAdmin, isAdminLoading } = useAdmin()

    if (loading & isAdminLoading) {
      return <progress className="progress w-56"></progress>;
    }
  
    const location = useLocation();
    if (user && isAdmin) {
      return children;
    }return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;