import React,{ useContext,useEffect,useState } from "react"
import {auth,GoogleProvider,handleUserProfile} from "../api"
import firebase from "firebase/app";
import "firebase/firestore";
const AuthContext=React.createContext()
firebase.firestore().enablePersistence()
.catch((err)=>{console.log(err.code)})
const UserCollectionRef = firebase.firestore().collection("users");
const adminCollectionRef= firebase.firestore().collection("admins")
const userDocRef = UserCollectionRef.doc("json");
export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)
    const [Name,setName]=useState("")
    const [userRef,setRef]=useState()
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
    async function isadmin(Name){
        let adminlist=await adminCollectionRef.get()
        if(!adminlist){
            return false
        }
        adminlist.forEach(element => {
            if(element===Name)
                return true
        });
        return false
    }
    async function likestate(productid){
        /*if(currentUser){
            setRef(userDocRef.collection(currentUser.uid).doc("like"))
        }
        if(userRef==null){
            return false
        }
        let alllikedref=userRef.where("id","==",productid)
        let snopshot = await alllikedref.get()
        if(snopshot){
            return true
        }
        else{
            return false
        }*/
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(async user =>{
            setCurrentUser(user)
            if(user){
                var values =await handleUserProfile(user)
                var userRef=values[0]
                var userdata=values[1]
                userRef.onSnapshot(snapshot=>{
                    userdata.displayName==null?setName(userdata.email):setName(userdata.displayName)

                })
            }
            setLoading(false)
        })
        return unsubscribe
    },[])

    const value={
        currentUser,
        Name,
        likestate,
        login,
        signup,
        googleauth,
        logout,
        forget,
        isadmin,
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}