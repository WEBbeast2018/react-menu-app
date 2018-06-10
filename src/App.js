import React, {Component} from 'react';
import './App.css';

const MenuItem = () => (
  <li>Menu item
  </li>
);


const AddMenuItem = () => (
  <div>
    <h2>Add New Item</h2>
    <input/>
    <button>Add</button>
  </div>
);

const Menu = () => (
  <div>
    <h2>Menu</h2>
    <ul>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
    </ul>
  </div>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddMenuItem/>
        <Menu/>
      </div>
    );
  }
}

export default App;
