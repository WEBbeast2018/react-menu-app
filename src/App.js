import React, {Component} from 'react';
import './App.css';
import AddMenuItem from './components/AddMenuItem';
import Menu from './components/Menu';

class App extends Component {
  constructor() {
    super();
  }

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
