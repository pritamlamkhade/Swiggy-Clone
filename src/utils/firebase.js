import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "swiggy-clone-b6190",
  storageBucket: "swiggy-clone-b6190.firebasestorage.app",
  messagingSenderId: "767707396043",
  appId: "1:767707396043:web:6646cbf0d6ea742581a84e",
  measurementId: "G-CNS2YC2YG8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
