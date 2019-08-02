import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../../css/Styles.css'
import { Link } from 'react-router-dom';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>

      <ul>
        <li><Link to={'/'} className="nav-link">Home</Link></li>
        <li><Link to={'/Login'} className="nav-link">Login</Link></li>
        <li><Link to={'/Register'} className="nav-link">Register</Link></li>
        <li><Link to={'/chef-contact'} className="nav-link">Contact</Link></li>
        <li><Link to={'/team'} className="nav-link">Team</Link></li>
        <li><Link to={'/about'} className="nav-link">About</Link></li>
      </ul>

    </Menu>
  );
};
