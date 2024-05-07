//FORGOT HOW TO DO THIS FFFFFFUUUU----------
// Import the functions you need from the SDKs you need
// found here: https://firebase.google.com/docs/web/alt-setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC9zYgY6n2S_6KuyvxO0-8UhQ3isk1A3DY",
	authDomain: "react-portfolio-958f5.firebaseapp.com",
	projectId: "react-portfolio-958f5",
	storageBucket: "react-portfolio-958f5.appspot.com",
	messagingSenderId: "312886807459",
	appId: "1:312886807459:web:09ddd6f4e381787b3f2816",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//
