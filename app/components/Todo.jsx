var React = require('react');
var moment = require('moment');
var Todo = React.createClass({

  render: function(){
    var {id, text, description, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;
      if(completed){
        message = "Completed ";
        timeStamp = completedAt;
      }
      return message + moment.unix(timeStamp).format('MM Do YYYY @ h: mm A')
    };
    return (
      <div className={todoClassName} onClick={() => {
        this.props.onToggle(id);
      }}> <div><input type="checkbox" checked={completed} /></div>
    <div><p>{text} </p>
      <p className = "todo__subtext"> <i> {description} </i>  {renderDate()}</p>
      </div>
      </div>
    )
  }
});

module.exports = Todo;
