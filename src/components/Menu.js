import React from 'react';
import {MenuItem} from './MenuItem';
import {connect} from 'react-redux';

// Note: this will work, but with no keys, console will show error
// Using keys in react is important performance-wise
const Menu = ({title, items}) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {items.map(item => <MenuItem key={item} item={item}/>)}
    </ul>
  </div>
);


const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps)(Menu);