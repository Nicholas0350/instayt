// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// // import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDUL9vcNR0jZ-NHBptFT7QzuHnv937iuVM",
//   authDomain: "nicksta-2-yt.firebaseapp.com",
//   projectId: "nicksta-2-yt",
//   storageBucket: "nicksta-2-yt.appspot.com",
//   messagingSenderId: "158043330520",
//   appId: "1:158043330520:web:b512519a19fa8a673704ad"
//   // measurementId: "G-5SYKEL5S98"
// };

// // Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
// const storage = getStorage();
// // const analytics = getAnalytics(app);

// export { app, db, storage };


// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
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
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };