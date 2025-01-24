import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure=axios.create({
    baseURL:'https://assignment-12-server-one-sage.vercel.app/'
})

const useAxiosSecure = () => {

    const {Signout}=useContext(AuthContext);
    const navigate=useNavigate();

    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token');
        config.headers.authorization= `Bearer ${token}`
        return config;
    },function(error){
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    },function(error){
        const status=error.response.status;

        if(status===401 || status===403){
            Signout()
            .then(res=>{
                navigate('/login')
            })
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;