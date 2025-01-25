import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from '../../assets/LootieFiles/LoginAnimation.json'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const navigate=useNavigate();

        const {login,googleLogin,setLoading}=useContext(AuthContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        login(email,password)
        .then(res=>{
            e.target.reset();
            // console.log(res);
            toast.success("Logged in! Congratulations!");
            navigate(location?.state ?location.state:"/");
        })
        .catch(err=>
            {console.log(err)
                setLoading(false);
                toast.error("Error !Invalid Email or Password!");
            });

    }

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(res=>{
            // console.log(res);
            toast.success("Login Successful");
            navigate(location?.state ?location.state:"/");
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="hero bg-base-100 min-h-screen">
            <Helmet>
        <title>Login || KeyNest</title>
      </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                <div className="text-center lg:text-left">

                    <Lottie className='lg:w-[400px] lg:h-[400px]' animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <Link to='/register' className="label group">
                                <a className="label-text-alt link link-hover">Don't Have any Account?  <span className='text-[#C82021] group-hover:font-bold group-hover:text-[14px]'>Register</span></a>
                            </Link>
                        </div>
                        <div className="form-control">
                            <button
                                type="submit"
                                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all w-full bg-red-500 rounded-xl group"
                            >
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                                    Login
                                </span>
                            </button>
                        </div>
                    </form>
                    <div className='px-6 pb-4 -mt-6'>
                        <div className="divider font-bold">OR</div>
                        <button
                            onClick={handleGoogleLogin}
                            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all w-full bg-red-500 rounded-xl group"
                        >
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-center text-white flex items-center justify-center gap-3 transition-colors duration-200 ease-in-out group-hover:text-white">
                                <FaGoogle /> Login With Google
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;