var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },{
          id: 2,
          text: 'Clean the yard'
        },{
          id: 3,
          text: 'Wash dishes'
        },{
          id: 4,
          text: 'Cut hair'
        }
      ]
    }
  },

  render: function(){

    var {todos} = this.state;

    return(
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h3>TodoApp.jsx</h3>
            <TodoList todos={todos}/>
          </div>
        </div>
      </div>
    );
  }


});


module.exports = TodoApp;
