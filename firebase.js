import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXAILRsruenLBi_VgUTT6419l6wQEB_24",
  authDomain: "fnmessage.firebaseapp.com",
  projectId: "fnmessage",
  storageBucket: "fnmessage.appspot.com",
  messagingSenderId: "120250271876",
  appId: "1:120250271876:web:3fb06f42e907d241f2dad1",
};

let app;
if (firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}
else{
    app = firebase.app();
}