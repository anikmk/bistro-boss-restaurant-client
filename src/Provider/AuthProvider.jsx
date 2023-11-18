import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Pages/firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)

    }
    const signInUser = (email,password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = () => {
        setLoading(true);
       return signOut(auth)
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
        signOutUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;