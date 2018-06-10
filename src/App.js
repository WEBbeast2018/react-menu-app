import React, {Component} from 'react';
import './App.css';

const MenuItem = (props) => (
  <li>{props.item}</li>
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
      <MenuItem item='Coffee'/>
      <MenuItem item='Milkshake'/>
      <MenuItem item='Omelet'/>
      <MenuItem item='Pasta'/>
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
