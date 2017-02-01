import firebase from "firebase";

try{
  var config = {
    apiKey: "AIzaSyAJPnOmW9tMoEQo9BiiSwWZ82HTkFB81x0",
    authDomain: "mead-todo-app-3b92a.firebaseapp.com",
    databaseURL: "https://mead-todo-app-3b92a.firebaseio.com",
    storageBucket: "mead-todo-app-3b92a.appspot.com",
    messagingSenderId: "142500828725"
  };
  firebase.initializeApp(config);
} catch(e){
  console.log('ERROR OCCURRED WHEN CONFIGURING FIREBASE: ', e)
}

export var firebaseRef=firebase.database().ref();
export default firebase;
