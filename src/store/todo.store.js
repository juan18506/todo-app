import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todos: [],
  filter: Filters.All,
}

const initStore = () => {
  loadStore();
  console.log(state);
}

const loadStore = () => {
  if (!localStorage.getItem('state')) return;

  const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
  state.todos = todos;
  state.filter = filter;
}

const saveStateToLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(state));
}

/**
 * 
 * @param {Filters} newFilter 
 */
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
  saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map(todo => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }

    return todo;
  });

  saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter(todo => todo.id !== todoId);
  saveStateToLocalStorage();
}

const deleteCompleted = () => {
  state.todos = state.todos.filter(todo => todo.done);
  saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateToLocalStorage();
}

const getCurrentFilter = () => {
  return state.filter;
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