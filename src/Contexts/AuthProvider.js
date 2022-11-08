import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
export const AuthContext=createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider= new GoogleAuthProvider()
    const createGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(profile)=>{

        return updateProfile(auth.currentUser,profile)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
             unsubscribe()
        }
    },[])
    const authInfo={user,logOut,createUser,createGoogle,logIn,updateUser,loading}
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;