import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todo: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del infinito'),
  ],
  filter: Filters.All,
}

const initStore = () => {
  console.log('initStore');
  console.log(state);
}

export default {
  initStore,
}