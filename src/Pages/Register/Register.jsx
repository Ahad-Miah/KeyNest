import React, { useContext, useState } from "react";
import registerAnimation from "../../assets/LootieFiles/RegisterAnimation.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const {register,handleUpdateProfile}=useContext(AuthContext);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error("No file selected!");
      return;
    }

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        const imageUrl = response.data.data.display_url; 
        setUploadedImageUrl(imageUrl);
        // console.log("Image uploaded successfully:", imageUrl);
      } else {
        console.error("Image upload failed:", response.data);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message || error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image= uploadedImageUrl;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

    if (!passwordRegex.test(password)) {
        toast.warning("Password length Should be  Six and at least one uppercase and one lowercase letter and one special character !");
        return;
    }

    register(email,password)
    .then(res => {
        handleUpdateProfile(name, image)
            .then(res => {
                toast.success("Registration successful")  
            })
            console.log(res);

    })
    .catch(err => console.log("err", err));


  };

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                onChange={(e) => handleImageUpload(e)}
                name="image"
                type="file"
                required
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <Link to="/login" className="label group">
                <span className="label-text-alt link link-hover">
                  Already Have an Account?{" "}
                  <span className="text-[#C82021] group-hover:font-bold group-hover:text-[14px]">
                    Login
                  </span>
                </span>
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
                  Register
                </span>
              </button>
            </div>
          </form>
          <div className="px-6 pb-4 -mt-6">
            <div className="divider font-bold">OR</div>
            <button
             
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

export default Register;
