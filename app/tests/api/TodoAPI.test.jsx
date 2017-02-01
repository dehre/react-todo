var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{

  it('should exist',()=>{
    expect(TodoAPI).toExist();
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

  });

});
