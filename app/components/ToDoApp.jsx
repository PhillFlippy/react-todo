var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [{
        id:1,
        text: 'Walk the dog',
        description: "faasdf"
      },
      {
        id: 2,
        text: 'Clean the yard',
        description: "faasdf"
      },
      {
        id:3,
        text: 'Take out trash',
        description: "faasdf"
      },
      {
        id: 4,
        text: 'Vacuum',
        description: "faasdf"
      }
    ]
  };
  },
  handleSetTask:function(newTask, newDescr){
    var arrayvar = this.state.todos.slice()
    var lol = { id: arrayvar.length+1,
    text:newTask,
    description: newDescr
  };
  arrayvar.push(lol);
  this.setState({ todos: arrayvar });
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
