import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }




  render() {
    const { showLoginForm } = this.state
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            {/* <NavLink to="/">Logo</NavLink> */}
          </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: '#2a6496' }}>Visitors</NavLink>
              </li>
              <li>
                <NavLink to="/latestnews" exact activeStyle={{ color: '#2a6496' }}>Latest news</NavLink>
           </li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default Header;
