import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyDRNPAW4pBItads01Qv4pvaSz8Ox7Bn3Fk",
  authDomain: "store-delivery-bro.firebaseapp.com",
  databaseURL: "https://store-delivery-bro-default-rtdb.firebaseio.com",
  projectId: "store-delivery-bro",
  storageBucket: "store-delivery-bro.appspot.com",
  messagingSenderId: "276006404396",
  appId: "1:276006404396:web:96d49723693ff63bd5ac89",
};

let app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const dbMenu = getDatabase(app);
const user = getAuth().currentUser;
const functions = getFunctions();

export { auth, db, user, dbMenu, functions };

