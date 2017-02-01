import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAJPnOmW9tMoEQo9BiiSwWZ82HTkFB81x0",
  authDomain: "mead-todo-app-3b92a.firebaseapp.com",
  databaseURL: "https://mead-todo-app-3b92a.firebaseio.com",
  storageBucket: "mead-todo-app-3b92a.appspot.com",
  messagingSenderId: "142500828725"
};
firebase.initializeApp(config);

var firebaseRef=firebase.database().ref();
firebaseRef.set({
  app: {
    name:'Todo App',
    version:'1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added',(snapshot)=>{
  console.log('New child added. ID:',snapshot.key,'Element added:',snapshot.val());
});
todosRef.push({
  text:'Cut the grass'
});
todosRef.push({
  text:'Cook dinner'
});
