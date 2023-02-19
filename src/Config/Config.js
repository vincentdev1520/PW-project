import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCjfubNQkifrC7KsdcEYY3HxetDInBl71I",
    authDomain: "proyectopw-1d2e3.firebaseapp.com",
    databaseURL: "https://proyectopw-1d2e3-default-rtdb.firebaseio.com",
    projectId: "proyectopw-1d2e3",
    storageBucket: "proyectopw-1d2e3.appspot.com",
    messagingSenderId: "277398051172",
    appId: "1:277398051172:web:eba5f84dd79e2eb49f0271"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }