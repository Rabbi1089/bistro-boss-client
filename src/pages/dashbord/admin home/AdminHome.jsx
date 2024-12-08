import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className=' text-3xl font-bold text-orange-600'>Hi , welcome {user?.displayName ? user?.displayName : 'Back'}</h2>
        </div>
    );
};

export default AdminHome;