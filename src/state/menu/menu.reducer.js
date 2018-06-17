const initialMenuState = {
  title: 'Cafe JS Menu',
  items: [
    'Coffee',
    'Milkshake',
    'Omelet',
    'Pasta'
  ]
};

export const menuReducer = (state = initialMenuState, action) => {
  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: state.items.concat(action.payload) };

    default:
      return state;
  }
};