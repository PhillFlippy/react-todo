var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');
var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [{
        id: uuid(),
        text: 'Walk the dog',
        description: "faasdf"
      },
      {
        id: uuid(),
        text: 'Clean the yard',
        description: "faasdf"
      },
      {
        id:uuid(),
        text: 'Take out trash',
        description: "faasdf"
      },
      {
        id: uuid(),
        text: 'Vacuum',
        description: "faasdf"
      }
    ]
  };
  },
  handleSetTask:function(newTask, newDescr){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTask,
          description: newDescr
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
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleSetTask} />


      </div>
    );
  }
});

module.exports = ToDoApp;
