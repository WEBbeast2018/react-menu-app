import React, {Component} from 'react';

export class AddMenuItem extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myChange = this.myChange.bind(this);
  }

  myChange() {
    console.log('myChange', this.myRef)
  }

  render() {
    return (
      <form>
        <h2>Add New Item</h2>
        <input ref={this.myRef} onChange={this.myChange}/>
        <button>Add</button>
      </form>
    )
  }
}

// export const AddMenuItem = () => (
//   <form onSubmit={ this.onSubmit.bind(this) }>
//     <h2>Add New Item</h2>
//     <input ref={ e => this.title = e }/>
//     <button>Add</button>
//   </form>
// );
