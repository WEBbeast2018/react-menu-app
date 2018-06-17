import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AddMenuItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.myRef.value);
    console.log('value', this.myRef.value);
    this.myRef.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <h2>Add New Item</h2>
        <input ref={ ref => this.myRef = ref }/>
        <button>Add</button>
      </form>
    )
  }
}

AddMenuItem.propTypes = {
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addItem: () => ({
    type: 'ADD_ITEM',
    payload: 'Some Payload'
  })
};
export default connect(null, mapDispatchToProps)(AddMenuItem);