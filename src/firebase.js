import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyASr_izz9mdPR_EtA896t-3fMlv0rB6beE",
    authDomain: "to-do-list-app-e831f.firebaseapp.com",
    databaseURL: "https://to-do-list-app-e831f.firebaseio.com",
    projectId: "to-do-list-app-e831f",
    storageBucket: "to-do-list-app-e831f.appspot.com",
    messagingSenderId: "322181249506",
    appId: "1:322181249506:web:e6fdc13d4975d9d59661bb"
})

export { firebaseConfig as firebase }; 