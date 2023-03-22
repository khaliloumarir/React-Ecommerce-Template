// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getStorage, ref } from "firebase/storage";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAwxVg7muMW4S-lrIU6Qk3ce3lm_hojhUo",

  authDomain: "crochettest-3ac45.firebaseapp.com",

  projectId: "crochettest-3ac45",

  storageBucket: "crochettest-3ac45.appspot.com",

  messagingSenderId: "336989538927",

  appId: "1:336989538927:web:c7ea65ffae72a71fe99b9a",

  measurementId: "G-LVD2J07CTS",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const storage = getStorage(app);

const auth = getAuth(app);

export { storage, auth };
