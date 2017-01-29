var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{

  it('should exist',()=>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos',()=>{

    beforeEach(()=>{
      localStorage.removeItem('todos');
    });

    it('should set valid todos array',()=>{
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      var expectedTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
      expect(expectedTodos).toEqual(todos);

    });

    it('should not set invalid todos array',()=>{
      var badTodos = {a:'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem
      ('todos')).toBe(null);

    });

  });


  describe('getTodos',()=>{

    it('should return empty array for bad localStorage data',()=>{
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);

    });

    it('should return todo if valid array in localStorage',()=>{

      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);

    })

  });

  describe('filterTodos', ()=>{
    var todos = [
      {
      id:1,
      text:'some text',
      completed:true
    },{
      id:2,
      text:'other text',
      completed:false
    },{
      id:3,
      text:'some text',
      completed:true
    }
  ];

    it('should return all items if showCompleted is true',()=>{
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });

    it('should return only an item if showCompleted is false',()=>{
      var filterTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status',()=>{
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should return all items if searchItem is empty',()=>{
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should return the 2 items when searching "some"',()=>{
      var filterTodos = TodoAPI.filterTodos(todos, true, 'some');

      expect(filterTodos.length).toBe(2);
    });



    // it('',()=>{});

  });

});
