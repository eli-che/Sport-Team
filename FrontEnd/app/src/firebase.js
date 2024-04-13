import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./firebase_secrets.js";

firebase.initializeApp(firebaseConfig);

export default firebase;
