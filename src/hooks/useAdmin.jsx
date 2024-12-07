import React from 'react';
import useAuth from './useAuth';
import useAxiousSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useAuth();
    const axiousSecure = useAxiousSecure();
    const { data : isAdmin} = useQuery({
        queryKey: [user?.email , 'isAdmin'],
        queryFn: async() => {
            const res = await axiousSecure.get(`/users/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin
        }
      })
    return [isAdmin]
};

export default useAdmin;