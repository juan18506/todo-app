import { App } from './src/todos/app';
import todoStore from './src/store/todo.store';

import './style.css';

todoStore.initStore();

App('#app');