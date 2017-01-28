var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
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

  handleAddTodo: function(text){
    var newList = this.state.todos;
    var newItem = {
      id: newList.length + 1,
      text: text
    };
    newList.push(newItem);
    this.setState({
      todos: newList
    });
  },

  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function(){

    var {todos} = this.state;

    return(
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h3>TodoApp.jsx</h3>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <br/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }


});


module.exports = TodoApp;
