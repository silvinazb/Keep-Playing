import firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC1Cil9jKg-3lFZV1X4oKdAYQWQJw8P85A",
    authDomain: "kepp-playing.firebaseapp.com",
    projectId: "kepp-playing",
    storageBucket: "kepp-playing.appspot.com",
    messagingSenderId: "516907693931",
    appId: "1:516907693931:web:1c4f7ff5c22acc70adbe2e"
})

export function getFirebase (){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}