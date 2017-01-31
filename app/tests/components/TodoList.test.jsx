var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from "configureStore";
import ConnectedTodoList, {TodoList} from "TodoList";
import ConnectedTodo, {Todo} from "Todo";

describe('TodoList', ()=>{

  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo item',()=>{
    var todos = [{
      id:1,
      text:'do something',
      completed:false,
      createdAt: 500,
      completedAt: undefined,
    },{
      id:2,
      text:'check mail',
      completed:false,
      createdAt: 500,
      completedAt: undefined,
    }];
    var store = configure({
      todos: todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.lenght).toBe(todos.lenght);
  });


  it('should render empty message if no todos',()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container_message').length).toBe(1);

  });

});
