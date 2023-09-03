import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAH8K3wF6LGDO18EVCpw40wmT_QXWLcvkI",
  authDomain: "react-netflix-clone-bb93b.firebaseapp.com",
  projectId: "react-netflix-clone-bb93b",
  storageBucket: "react-netflix-clone-bb93b.appspot.com",
  messagingSenderId: "1037723986197",
  appId: "1:1037723986197:web:17dcf042d36eef1750211c",
  measurementId: "G-TH8TNK3LN1"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
