import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del infinito'),
  ],
  filter: Filters.All,
}

const initStore = () => {
  console.log('initStore');
  console.log(state);
}

const loadStore = () => {
  throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter(todo => todo.done);

    case Filters.Completed:
      return state.todos.filter(todo => !todo.done);

    default:
      throw new Error(`Option ${filter} is not valid.`);
  }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is required');

  state.todos.push(new Todo(description));
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
  throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
  throw new Error('Not implemented');
}

const deleteCompleted = () => {
  throw new Error('Not implemented');
}

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented');
}

const getCurrentFilter = () => {
  throw new Error('Not implemented');
}

export default {
  initStore,
  loadStore,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter,  
}