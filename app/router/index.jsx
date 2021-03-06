import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'ToDoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  //middleware
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};
var redirectIfLogin = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
  <Route path="/">
  <Route path='todos' component={TodoApp} onEnter={requireLogin}/>
  <IndexRoute component={Login} onEnter={redirectIfLogin}/>
</Route>
</Router>
);
