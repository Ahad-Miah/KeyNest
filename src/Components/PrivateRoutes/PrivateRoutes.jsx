import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <div className='flex justify-center items-center'>
        <span className="loading mx-auto loading-spinner text-neutral"></span>
    </div>
    }
    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoutes;