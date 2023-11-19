import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Pages/firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email,password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)

    }
    const signInUser = (email,password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const signOutUser = () => {
        setLoading(true);
       return signOut(auth)
    }
    const updateUserProfile = (name,photo) => {
         return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            console.log('current user',currentUser)
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        }
    },[])
    const info = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;