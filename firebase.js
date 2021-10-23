// Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmfY10n8Nu0xWN6sHuyML9gKPPJHe2E8E",
  authDomain: "nicksta-2-yt-5ee69.firebaseapp.com",
  projectId: "nicksta-2-yt-5ee69",
  storageBucket: "nicksta-2-yt-5ee69.appspot.com",
  messagingSenderId: "656220844105",
  appId: "1:656220844105:web:9080cbb90b0c57177fcf98"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };