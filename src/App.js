import React, {Component} from 'react';
import './App.css';
import {AddMenuItem} from './components/AddMenuItem';
import {Menu} from './components/Menu';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuTitle: 'Cafe JS Menu',
      menuItems: [
        'Coffee',
        'Milkshake',
        'Omelet',
        'Pasta'
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <AddMenuItem/>
        <Menu title={this.state.menuTitle} items={this.state.menuItems}/>
      </div>
    );
  }
}

export default App;
