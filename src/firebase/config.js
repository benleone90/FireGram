import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAymxgG-wxh77JZBoqKqgPGFunWjkXr5Mg",
  authDomain: "firegram-9dd2d.firebaseapp.com",
  databaseURL: "https://firegram-9dd2d.firebaseio.com",
  projectId: "firegram-9dd2d",
  storageBucket: "firegram-9dd2d.appspot.com",
  messagingSenderId: "601172716412",
  appId: "1:601172716412:web:3c2e6004a23214241852f9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
