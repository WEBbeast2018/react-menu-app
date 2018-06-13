import React from 'react';
import {MenuItem} from './MenuItem';

export const Menu = (props) => (
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

// You can instead export like this:
// export default Menu;