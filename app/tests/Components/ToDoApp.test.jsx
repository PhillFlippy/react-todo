var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exist', ()=> {
    expect(ToDoApp).toExist();
  });
  it('should add todo to the todo state on handleAddTodo', () =>
{
  var todoText = "text test";
  var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);
  todoApp.setState({
    todos: []
  });
  todoApp.handleSetTask(todoText, '');
  expect(todoApp.state.todos[0].text).toBe(todoText);

  expect(todoApp.state.todos[0].createdAt).toBeA('number');

});
it('should toggle completed value when handletoggle called', () =>{
  var todoData = {
    id: 11,
    text: 'test',
    description: 'adsf',
    completed: false,
    createdAt: 4,
    completedAt:undefined
  };
  var todoApp = TestUtils.renderIntoDocument(<ToDoApp /> );
  todoApp.setState({todos: [todoData]});

  expect(todoApp.state.todos[0].completed).toBe(false);
  todoApp.handleToggle(11);
  expect(todoApp.state.todos[0].completed).toBe(true);
  expect(todoApp.state.todos[0].completedAt).toBeA('number');
});
it('should toggle todo from completed to incomplete', () =>{
  var todoData = {
    id: 11,
    text: 'test',
    description: 'adsf',
    completed: true,
    createdAt: 4,
    completedAt:143
  };
  var todoApp = TestUtils.renderIntoDocument(<ToDoApp /> );
  todoApp.setState({todos: [todoData]});

  expect(todoApp.state.todos[0].completed).toBe(true);
  todoApp.handleToggle(11);
  expect(todoApp.state.todos[0].completed).toBe(false);
  expect(todoApp.state.todos[0].completedAt).toNotExist();
});
});
