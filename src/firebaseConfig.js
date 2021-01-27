import firebase from "firebase/app";
import "firebase/firestore";



const miConfiguracion = {
    apiKey: "AIzaSyAIp3wISVeLIbUS8-SlAKRn6n7-JOXJPj0",
    authDomain: "reactcoder-ec997.firebaseapp.com",
    projectId: "reactcoder-ec997",
    storageBucket: "reactcoder-ec997.appspot.com",
    messagingSenderId: "591405118634",
    appId: "1:591405118634:web:d64ce597f5bdc3c19f0cd3"
}


const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app)

