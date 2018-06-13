import React from 'react';
import {MenuItem} from './MenuItem';

export const Menu = (props) => (
  <div>
    <h2>{props.title}</h2>
    <ul>
      <MenuItem item={props.items[0]}/>
      <MenuItem item={props.items[1]}/>
      <MenuItem item={props.items[2]}/>
      <MenuItem item={props.items[3]}/>
    </ul>
  </div>
);
