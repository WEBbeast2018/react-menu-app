import React from 'react';
import {MenuItem} from './MenuItem';

export const Menu = ({title, items}) => (
  <div>
    <h2>{title}</h2>
    <ul>
      <MenuItem item={items[0]}/>
      <MenuItem item={items[1]}/>
      <MenuItem item={items[2]}/>
      <MenuItem item={items[3]}/>
    </ul>
  </div>
);
