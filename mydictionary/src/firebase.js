import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDnwJeo0dHvfdRSc13hGrDcFAcEKFFw1Xg",
    authDomain: "dictionary-d0ec7.firebaseapp.com",
    projectId: "dictionary-d0ec7",
    storageBucket: "dictionary-d0ec7.appspot.com",
    messagingSenderId: "940350698471",
    appId: "1:940350698471:web:25befd3c680f8e7208c342",
    measurementId: "G-SF2LV4BXGC"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };