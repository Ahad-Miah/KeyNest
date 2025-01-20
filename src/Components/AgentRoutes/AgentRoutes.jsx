import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const AgentRoutes = ({children}) => {

    const { user } = useContext(AuthContext);

    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}user/role/${user?.email}`)
            return data.role;
        },
    })
    if (isLoading) {
        return <div className='flex justify-center items-center'>
            <span className="loading mx-auto loading-spinner text-neutral"></span>
        </div>
    }
    if (role === "agent") {
        return children
    }
    return (
        <Navigate to="/dashboard/myProfile"></Navigate>
    );
};

export default AgentRoutes;