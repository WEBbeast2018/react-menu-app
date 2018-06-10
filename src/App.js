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

const Menu = (props) => (
  <div>
    <h2>{props.title}</h2>
    <ul>
      <MenuItem item='Coffee'/>
      <MenuItem item='Milkshake'/>
      <MenuItem item='Omelet'/>
      <MenuItem item='Pasta'/>
    </ul>
  </div>
);


class App extends Component {
  constructor() {
    super();

    this.state = {
      menuTitle: 'Cafe JS Menu'
    }
  }
  render() {
    return (
      <div className="App">
        <AddMenuItem/>
        <Menu title={this.state.menuTitle}/>
      </div>
    );
  }
}

export default App;
