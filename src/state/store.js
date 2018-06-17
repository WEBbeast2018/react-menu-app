import { createStore } from 'redux';
import { menuReducer } from './menu/menu.reducer';

const store = createStore(menuReducer);

// for dev purpose only
window.store = store;

export default store;