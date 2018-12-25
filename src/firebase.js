import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDdoOM_qjskVb7LP4CZSCguVNelafMwwp4",
    authDomain: "comentarios-devreact.firebaseapp.com",
    databaseURL: "https://comentarios-devreact.firebaseio.com",
    projectId: "comentarios-devreact",
    storageBucket: "comentarios-devreact.appspot.com",
    messagingSenderId: "293241375623"
  };
  firebase.initializeApp(config);

  export const database = firebase.database();
  export const auth = firebase.auth();