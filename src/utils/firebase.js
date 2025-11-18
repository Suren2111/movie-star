// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW6u4tg5wMvfQV39gCgn8evVHYLYz4pws",
  authDomain: "moviestar-a88f5.firebaseapp.com",
  projectId: "moviestar-a88f5",
  storageBucket: "moviestar-a88f5.firebasestorage.app",
  messagingSenderId: "325603058664",
  appId: "1:325603058664:web:df79c1fcc014eb33763a5d",
  measurementId: "G-PHC8YF8E12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();