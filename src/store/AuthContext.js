import React,{ useContext,useEffect,useState } from "react"
import {auth,GoogleProvider} from "../api"
const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)
    GoogleProvider.setCustomParameters({prompt:'select_account'});
    function googleauth(){
        return auth.signInWithPopup(GoogleProvider);
    }
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        return auth.signOut()
    }
    

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])

    const value={
        currentUser,
        login,
        signup,
        googleauth,
        logout,
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}