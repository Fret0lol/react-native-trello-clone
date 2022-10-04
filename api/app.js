import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4SNICsMHT7XLmKs2DQiqPiq4rZSon8Ig",
    authDomain: "trello-react-6d523.firebaseapp.com",
    projectId: "trello-react-6d523",
    storageBucket: "trello-react-6d523.appspot.com",
    messagingSenderId: "829928700864",
    appId: "1:829928700864:web:5e0c545084c77cdab62625",
    databaseURL: "https://trello-react-6d523-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);