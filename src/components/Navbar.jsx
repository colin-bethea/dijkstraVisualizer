import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
      <div className="navWide">
          <div className="wideDiv">
              <a href="https://github.com/colin-bethea/dijkstraVisualizer">Source Code</a>
              <a href="https://www.colinbethea.com/">About Me</a>
              </div>
          </div>
      </nav>
    );
  }
}