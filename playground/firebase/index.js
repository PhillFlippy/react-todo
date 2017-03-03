import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyAr-3iMexzPGko6M3B5sMownl1IjnAC-TA",
   authDomain: "phillips-todo-app.firebaseapp.com",
   databaseURL: "https://phillips-todo-app.firebaseio.com",
   storageBucket: "phillips-todo-app.appspot.com",
   messagingSenderId: "420017912822"
 };
 firebase.initializeApp(config);
var firebaseRef=firebase.database().ref();
 firebaseRef.set({
    app: {
      name: 'TODO APP',
      version: '1.0.0'
   },
   isRunning: true,
   user: {
      name: 'pHILLIP',
      age: 25
   }
}).then(()=>{
   console.log('Set worked');
}, (e) => {
   console.log('set failed');
});
// firebaseRef.update({
//    isRunning:false,
//    'app/name': 'Todo Application'
// });
firebaseRef.once('value').then((snapshot) => {
  console.log('Got entire database', snapshot.val());
}, (e) => {
  console.log('Unable to fetch value.')
});
// firebaseRef.update({
//    'app/name': 'Todo Application',
//    'user/name': 'Phillip'
// });
// firebaseRef.child('user').update({
//    name: 'Phillip'
// });
// firebaseRef.child('app').update({
//    name: 'Todo Application'
// });
//
// firebaseRef.child('app/name').remove();
