import React from 'react';
import _ from 'lodash';

import { NavLink } from 'react-router-dom';

import DataStore from '../flux/stores/DataStore.js'

export class Header extends React.Component {   
   
  render() {

    return (
      <div className="header">
        
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/stories">Stories</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

      </div>
    );
  }
}
