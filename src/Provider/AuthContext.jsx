import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true)
    }
    const signInUser = (email,password) => {
        setLoading(true)
    }
    const signOutUser = () => {
        setLoading(true)
    }

    useEffect(()=>{
        
    },[])
    const info = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;