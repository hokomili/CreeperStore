import React,{ useContext,useEffect,useState } from "react"
import firebase from "firebase/app"
import "firebase/firestore";
import {auth,GoogleProvider,handleUserProfile} from "../api"
const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)
    const [Name,setName]=useState("")
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
            console.log(user)
            if(user){
                var values =await handleUserProfile(user)
                var userRef=values[0]
                var userdata=values[1]
                console.log(userRef)
                userRef.onSnapshot(snapshot=>{
                    console.log(snapshot);
                    setName(userdata.displayName)
                    console.log(userdata.displayName);
                })
            }
            setLoading(false)
        })
        return unsubscribe
    },[])

    const value={
        currentUser,
        Name,
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