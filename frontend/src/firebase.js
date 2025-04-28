// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDlDG3UDYxWpFqgb5Mk000fDCVED7EHwU",
  authDomain: "quiz-platform-33f35.firebaseapp.com",
  projectId: "quiz-platform-33f35",
  storageBucket: "quiz-platform-33f35.firebasestorage.app",
  messagingSenderId: "890371661069",
  appId: "1:890371661069:web:2276a0e8739c4031bfa444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);

export { db };