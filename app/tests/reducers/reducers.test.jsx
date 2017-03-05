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
  describe('authReducer', () => {
    it('should add our uid', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
      };
      const res = reducers.authReducer(df({}), df(action));
      expect(res).toEqual({
        uid: action.uid});
    });
    it('should delete uid when logout', () => {
      const authData = {
        uid: '123abc'
      };
      const action = {
        type: 'LOGOUT'
      };
      const res = reducers.authReducer(df(authData), df(action));
      expect(res.uid).toEqual(undefined);
    });
  });
  describe('todoReducer', () => {
    it('should add new todo', ()=> {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '2431324',
          text: 'blah blah',
          description: 'blah blah',
          completed: false,
          createdAt: 123253,
        }
      };
      var res = reducers.todoReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
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
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todoReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
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
