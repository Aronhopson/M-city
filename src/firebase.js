import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBTyULq6zcWflGi9FNvIpt1tP8Yr-3O6KM",
    authDomain: "barca-ecc1b.firebaseapp.com",
    databaseURL: "https://barca-ecc1b.firebaseio.com",
    projectId: "barca-ecc1b",
    storageBucket: "barca-ecc1b.appspot.com",
    messagingSenderId: "754374892682",
    appId: "1:754374892682:web:ae2273528c13698b482173",
   
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const Matchesdata = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions")
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref('players');

//network request to firebase we need to pass ref(refernec to what we need) trigger once and {then} it will return the promise
// firebaseDB.ref("matches").once("value").then((snapshot) => {
//     console.log(snapshot.val())
// })



export {
    firebase,
    Matchesdata,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers,
}