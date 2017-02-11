var React = require('react');

var Todo = React.createClass({

  render: function(){
    var {id, text, description} = this.props;
    return (
      <div>
      <span>{id}: {text} </span>
      <i> {description}</i>
      </div>
    )
  }
});

module.exports = Todo;
