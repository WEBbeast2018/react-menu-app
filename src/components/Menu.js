import React from 'react';
import {MenuItem} from './MenuItem';

function styleByIndex(value) {
  return (value%2 === 1) ? 'red' : 'green';
}

export const Menu = ({title, items}) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {
        items.map((item, index) =>
          <MenuItem item={item} itemStyle={styleByIndex(index)}/>)
      }
    </ul>
  </div>
);
