import React from 'react';
import {MenuItem} from './MenuItem';

// Note: this will work, but with no keys, console will show error
// Using keys in react is important performance-wise
export const Menu = ({title, items}) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {items.map(item => <MenuItem item={item}/>)}
    </ul>
  </div>
);

