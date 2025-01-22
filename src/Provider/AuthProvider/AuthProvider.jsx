import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../utils/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';



export const AuthContext = createContext();
const provider = new GoogleAuthProvider;
const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // register a user
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    //  login user

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login

    const googleLogin = () => {
        return signInWithPopup(auth, provider)

    }

    //signout

    const Signout = () => {
        setLoading(true);
        return signOut(auth)
    }

    // overver

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            console.log("currentUSer",currentUser);
            setUser(currentUser);
            setLoading(false);
           
           if(currentUser){
            const userInfo={email:currentUser?.email}
                axios.post(`${import.meta.env.VITE_API_URL}jwt`,userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
           }
           else{
                    localStorage.removeItem('access-token')
           }
           
           if(currentUser.email){
            await axios.post(`${import.meta.env.VITE_API_URL}users/${currentUser?.email}`,
                {
                    name: currentUser?.displayName,
                    email: currentUser?.email,
                    image: currentUser?.photoURL,
                    role: "customer"
                })
           }
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        register,
        handleUpdateProfile,
        login,
        googleLogin,
        Signout,
        setUser,
        user,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;