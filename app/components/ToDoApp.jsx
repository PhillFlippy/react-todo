//third party libraries
var React = require('react');
var uuid = require('node-uuid');
//local
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI')

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
  };
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleSetTask:function(newTask, newDescr){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTask,
          description: newDescr,
          completed: false
        }
      ]
    });
  //   var arrayvar = this.state.todos.slice()
  //   var lol = { id: arrayvar.length+1,
  //   text:newTask,
  //   description: newDescr
  // };
  // arrayvar.push(lol);
  // this.setState({ todos: arrayvar });
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map( (todo) => {
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
    });
    this.setState({todos: updatedTodos});
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleSetTask} />


      </div>
    );
  }
});

module.exports = ToDoApp;
