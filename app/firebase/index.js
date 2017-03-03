import firebase from 'firebase';

try{
   var config = {
      apiKey: "AIzaSyAr-3iMexzPGko6M3B5sMownl1IjnAC-TA",
      authDomain: "phillips-todo-app.firebaseapp.com",
      databaseURL: "https://phillips-todo-app.firebaseio.com",
      storageBucket: "phillips-todo-app.appspot.com",
      messagingSenderId: "420017912822"
    };
    firebase.initializeApp(config);
} catch(e) {

};
 
export var firebaseRef=firebase.database().ref();
export default firebase;
