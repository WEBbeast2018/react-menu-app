import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case 'ADD_ITEM':
      return null;

    default:
      return state;
  }
};

const initialState = {
  items: []
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;