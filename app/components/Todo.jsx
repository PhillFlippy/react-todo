var React = require('react');

var Todo = React.createClass({

  render: function(){
    var {id, text, description, completed} = this.props;
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}> <input type="checkbox" checked={completed} />
    {text}
      <i> {description}</i>
      </div>
    )
  }
});

module.exports = Todo;
