var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
     var todoDescription = this.refs.todoDescription.value;
    if (todoText.length > 0 ) {
      this.refs.todoText.value = '';
      this.refs.todoDescription.value='';
      dispatch(actions.startAddTodo(todoText, todoDescription));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <input type="text" ref="todoDescription" placeholder='Add a short description of the task. (Optional)'/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});
export default connect()(AddTodo);
