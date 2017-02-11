var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
     var todoDescription = this.refs.todoDescription.value;
    if (todoText.length > 0 ) {
      this.refs.todoText.value = '';
      this.refs.todoDescription.value='';
          this.props.onAddTodo(todoText, todoDescription);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <input type="text" ref="todoDescription" placeholder='Add a short description of the task. (Optional)'/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
