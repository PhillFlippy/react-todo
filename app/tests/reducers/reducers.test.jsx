var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');
describe('Reducers', ()=>{
  describe('searchTextReducer', () =>{
      it('should set search text', ()=> {
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'some text'
        };
        var res = reducers.searchTextReducer(df(''), df(action));
        expect(res).toEqual(action.searchText);
      });
  });
  describe('showCompletedReducer', () => {
    it('should toggle our show completed', ()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toBe(true);
    });

  });
  describe('todoReducer', () => {
    it('should add new todo', ()=> {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog',
        description: 'take dog'
      };
      var res = reducers.todoReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'something',
        description: 'afsd',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todoReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
    it('should add existing todos', () => {
      var todos = [{
        id: '11',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3300
      }]
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todoReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

});
