import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";

import textile from "../json/textile.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";

// Initialize the FirebaseUI Widget using Firebase.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);
// REFERENCE PRODUCTS
export const auth =firebase.auth();
export const firestore =firebase.firestore();
export const GoogleProvider= new firebase.auth.GoogleAuthProvider();

const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "allProducts")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}
export const handleUserProfile=async(userAuth,otherdata)=>{
  if(!userAuth)return;
  const {uid}=userAuth;
  const usersRef = firebase.firestore().collection("users")
  console.log(usersRef)
  const userRef = usersRef.doc(`${uid}`);
  console.log(userRef)
  const snapshot =await userRef.get();
  const userdata = snapshot.data();
  if (!snapshot.exists){
    const{displayName,email}=userAuth;
    const timestamp =new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdDate:timestamp,
        ...otherdata
      })
    } catch(err){
      console.log("usererror_profile")
    }
  }
  return [userRef,userdata]
}

export const getJSON = (url) => {
  switch (url) {
    case "/":
      return products;
    case "/textile":
      return textile;
    case "/tableware":
      return tableware;
    case "/lighting":
      return lighting;
    case "/cookware":
      return cookware;
    case "/furniture":
      return furniture;
    case "/home-accessories":
      return homeAccessories;
    default:
      return products;
  }
};