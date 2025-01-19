import React, { createContext, useState } from 'react';
import { auth } from '../../utils/firebase.init';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [loading,setLoading]=useState(true);
    // register a user
    const register=(email,password)=>{
        // setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password)
    }

     // update profile
     const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
             displayName: name,
             photoURL: photo,
         })
     }
    const authInfo = {
        register,
        handleUpdateProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;