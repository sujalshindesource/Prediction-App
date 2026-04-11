import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABi1-Erg0-44tnKhSPR_L4MpaYGE-sA0g",
  authDomain: "prediction-app-b6174.firebaseapp.com",
  projectId: "prediction-app-b6174",
  storageBucket: "prediction-app-b6174.firebasestorage.app",
  messagingSenderId: "333703591463",
  appId: "1:333703591463:web:7463dc87ceb6c99e260002"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
