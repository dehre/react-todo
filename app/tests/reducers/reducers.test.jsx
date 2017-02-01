var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',()=>{

  describe('searchTextReducer',()=>{
    it('should set searchText',()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Andrew'
      };
      var res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer',()=>{
    it('should toggle showCompleted',()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer',()=>{
    it('should add a new todo',()=>{
      var action = {
        type: 'ADD_TODO',
        todo: {
          id:'abc123',
          text:'Something to do',
          completed:false,
          createdAt:123456
        }
      };
      var res = reducers.todosReducer(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle Todo completed status',()=>{
      var todos = [{
        id: '123',
        text: 'Feed cat',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      var action = {
        type:'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todosReducer(df(todos),df(action));
      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(!todos[0].completed);
      expect(res[0].completedAt).toEqual(undefined);

    });

    it('should add existing todos',()=>{
      var todos = [{
        id:'111',
        text:'anything',
        completed:false,
        createdAt: 33000,
        completedAt:undefined
      }];
      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };
      var res = reducers.todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

  });

});
