// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID

    // apiKey: "AIzaSyCZVCPGhtUx9flJUi_8AdZXieWyuuw1kzo",
    // authDomain: "childhood-kids-toys-store.firebaseapp.com",
    // projectId: "childhood-kids-toys-store",
    // storageBucket: "childhood-kids-toys-store.appspot.com",
    // messagingSenderId: "894649662679",
    // appId: "1:894649662679:web:0e89348918d48450c6c492"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;