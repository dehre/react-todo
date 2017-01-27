var React = require('react');

var Todo = React.createClass({


  render: function(){

    var {text,id} = this.props;

    return(
      <div>
        <h5>{id}. {text}</h5>
      </div>
    )
  }

});

module.exports = Todo;
