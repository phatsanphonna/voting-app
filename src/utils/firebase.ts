// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD60IaJMOw8cbz-yWOP533W8Si8VFZX3w0",
    authDomain: "voting-app-17720.firebaseapp.com",
    projectId: "voting-app-17720",
    storageBucket: "voting-app-17720.appspot.com",
    messagingSenderId: "416111517320",
    appId: "1:416111517320:web:238e8d7e8370e76584893d",
    measurementId: "G-99YJ87HF6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)
