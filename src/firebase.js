import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_2onAH_uiyDOSQr7NKp4ZEvToQGA7F84",
    authDomain: "portfolio-website-contac-59b6d.firebaseapp.com",
    projectId: "portfolio-website-contac-59b6d",
    storageBucket: "portfolio-website-contac-59b6d.appspot.com",
    messagingSenderId: "202055918571",
    appId: "1:202055918571:web:0dd75a9a19c50116beefae"
});

const db = firebaseApp.firestore();

export { db };

