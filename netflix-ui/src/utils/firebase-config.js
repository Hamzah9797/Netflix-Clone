import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9MSqG_14pFKIN2BtyZYcrAVwextibtu8",
  authDomain: "react-netflix-clone-b9393.firebaseapp.com",
  projectId: "react-netflix-clone-b9393",
  storageBucket: "react-netflix-clone-b9393.appspot.com",
  messagingSenderId: "456373090278",
  appId: "1:456373090278:web:43247668cb98f0e591c827",
  measurementId: "G-71D38MVPJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
