import React, {Component} from 'react';

export class AddMenuItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.setRef = this.setRef.bind(this)
  }

  setRef(myRef) {
    this.myRef = myRef;
    console.log('myRef', this.myRef)
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.myRef.value);
    console.log('value', this.myRef.value);
    this.myRef.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <h2>Add New Item</h2>
        <input ref={ this.setRef}/>
        <button>Add</button>
      </form>
    )
  }
}