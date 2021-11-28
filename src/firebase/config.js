import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"


// Configure Firebase.
const config = {
    apiKey: "AIzaSyDqzcveEtzkRgTB3n1fndE3eVDC--GZVdo",
    authDomain: "chat-app-javascript-2d7fa.firebaseapp.com",
    projectId: "chat-app-javascript-2d7fa",
    storageBucket: "chat-app-javascript-2d7fa.appspot.com",
    messagingSenderId: "741625878047",
    appId: "1:741625878047:web:54f4ce6844e32872d4272a",
    measurementId: "G-5FQ21TJD7F"
};
const firebaseApp = firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

const auth = firebase.auth()
const db = getFirestore(firebaseApp)


export { uiConfig, config, auth, db }