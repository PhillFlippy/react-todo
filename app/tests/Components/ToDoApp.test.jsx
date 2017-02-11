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
});
it('should toggle completed value when handletoggle called', () =>{
  var todoData = {
    id: 11,
    text: 'test',
    description: 'adsf',
    completed: false
  };
  var todoApp = TestUtils.renderIntoDocument(<ToDoApp /> );
  todoApp.setState({todos: [todoData]});

  expect(todoApp.state.todos[0].completed).toBe(false);
  todoApp.handleToggle(11);
  expect(todoApp.state.todos[0].completed).toBe(true);
});
});
