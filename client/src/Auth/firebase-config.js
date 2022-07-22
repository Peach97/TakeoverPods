import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//adding from firebase auth library to application

const firebaseConfig = {
  apiKey: "AIzaSyCJ4Kyjv6dM6t6WL938Er483iIpYbOJkgs",
  authDomain: "takeover-pods.firebaseapp.com",
  projectId: "takeover-pods",
  storageBucket: "takeover-pods.appspot.com",
  messagingSenderId: "958463157256",
  appId: "1:958463157256:web:bca90a96f3107f3aa15dbd",
  measurementId: "G-4M6DDRH0X3",
};
//need to add these as environment variables

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
