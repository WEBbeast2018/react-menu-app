import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: state.items.concat(action.payload) };

    default:
      return state;
  }
};

const initialState = {
  items: [
    'Coffee',
    'Milkshake',
    'Omelet',
    'Pasta'
  ]
};

const store = createStore(reducer, initialState);

// for dev purpose only
window.store = store;

export default store;