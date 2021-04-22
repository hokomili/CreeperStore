import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";
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
const mapsCollectionRef = productsDocRef.collection("maps");
const textureCollectionRef = productsDocRef.collection("textures");
const modsCollectionRef = productsDocRef.collection("mods");
const mediaCollectionRef = productsDocRef.collection("medias");
export const upload = async (producte)=>{
  allProductsCollectionRef.doc().set({producte})
}
export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  const collectiontitle = collection.title || "Admin";
  let jsonProducts = [];
  // QUERY PRODUCTS
  let querySnapshot;
  let doubleQuery;
  if(url==="/Admin"){
    querySnapshot = await allProductsCollectionRef.get();
    querySnapshot.forEach((doc)=>{
      jsonProducts.push(doc.data());
    })
    return jsonProducts;
  }
  if (collectionName === "allProducts")
    querySnapshot = allProductsCollectionRef;
  else
    querySnapshot = allProductsCollectionRef.where("category", "==", collectionName);
  if(collectiontitle === "Admin")
    doubleQuery =await querySnapshot.get();
  else
    doubleQuery =await querySnapshot.where("category2","==",collectiontitle).get();
  doubleQuery.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const feedProducts = async() => {
  products.forEach(async (product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    console.log(await docRef.set({...product,id}))
  })
}
export const feedMedias = () => {
  products.forEach((product) => {
    const docRef = mediaCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}
export const feedMods = () => {
  products.forEach((product) => {
    const docRef = modsCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}
export const feedTextures = () => {
  products.forEach((product) => {
    const docRef = textureCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}
export const feedMaps = () => {
  products.forEach((product) => {
    const docRef = mapsCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}
export const delet=async(product)=>{
  await allProductsCollectionRef.doc(product.id).delete()
}
export const handleUserProfile=async(userAuth,otherdata)=>{
  if(!userAuth)return;
  const {uid}=userAuth;
  const usersRef = firebase.firestore().collection("users").doc("json");
  const userRef = usersRef.collection(`${uid}`).doc("profile");
  var snapshot =await userRef.get();
  var userdata =snapshot.data();
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
      try{
      snapshot =await userRef.get();
      } catch(err){
        console.log("geterror_profile")
      }
      userdata = snapshot.data();
    } catch(err){
      console.log("usererror_profile")
    }
  }
  return [userRef,userdata];
}