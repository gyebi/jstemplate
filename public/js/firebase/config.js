// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd4_ww_rwT4ZO5MBzNxNkzIXdnqO4mElI",
  authDomain: "winfred-js-starter.firebaseapp.com",
  projectId: "winfred-js-starter",
  storageBucket: "winfred-js-starter.firebasestorage.app",
  messagingSenderId: "991785837727",
  appId: "1:991785837727:web:351d272c7fd92a8c112eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);