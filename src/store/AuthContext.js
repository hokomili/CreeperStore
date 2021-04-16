import React,{ useContext,useEffect,useState } from "react"
import {auth,GoogleProvider,handleUserProfile} from "../api"
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
    function forget(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(async user =>{
            setCurrentUser(user)
            if(user){
                const userRef=await handleUserProfile(user)
                userRef.onSnapshot(snapshot=>{
                    console.log("it changed")
                })
            }
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
        forget,
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}