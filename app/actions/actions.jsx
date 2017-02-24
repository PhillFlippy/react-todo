export var setSearchText = (searchText) => {
return {
  type: 'SET_SEARCH_TEXT',
  searchText: searchText
};
};
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
};
};
export var addTodo = (text, description) => {
  if (!description){
    description = '';
  }
  return {
    type: 'ADD_TODO',
    text,
    description
  };
};
export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};