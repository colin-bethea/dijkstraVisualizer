import React, {Component} from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
      <div className="navWide">
          <div className="wideDiv">
              <a href="https://google.com">Link 1</a>
              <a href="https://google.com">Link 2</a>
              <a href="https://google.com">Link 3</a>
              </div>
          </div>
      </nav>
    );
  }
}