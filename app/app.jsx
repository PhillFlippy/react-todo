var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'ToDoApp';
var {Provider} = require('react-redux');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
// store.subscribe(() =>{
//   var state = store.getState()
//   console.log('New state', store.getState());
//   TodoAPI.setTodos(state.todos);
// });
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();
//App css
require('style!css!sass!applicationStyles')
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/">
    <Route path='todos' component={TodoApp} />
    <IndexRoute component={Login} />
  </Route>
  </Router>
  </Provider>,
  document.getElementById('app')
);
