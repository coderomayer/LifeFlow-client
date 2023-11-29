import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth"
import auth from "../Config/firebase.config";

export const userAuth = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
       return  signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () => {
        return onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        })

    } , [])




    const userData = {
        createUser,
        loginUser,
        googleLogin,
        logOut,
        user,
        loading
    }
    
    return (
        <userAuth.Provider value={userData}>
            {children}
        </userAuth.Provider>
    )
}

export default AuthProvider;