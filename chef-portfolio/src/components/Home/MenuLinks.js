import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../../css/Styles.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default props => {
  const StyledList = styled.ul`
  list-style:none;
  color:white;
  text-decoration:none;
  outline : none;
  height:50px!important;
  li{
    color:white!important;
    outline : none;
  }
  .nav-link{
    color:white!important;
    text-decoration:none;
  }

  `;
  
  return (
  
  
    // Pass on our props
    <Menu {...props}>

      <StyledList>
        <li><Link to={'/'} className="nav-link">Home</Link></li>
        <li><Link to={'/Login'} className="nav-link">Login</Link></li>
        <li><Link to={'/Register'} className="nav-link">Register</Link></li>
        <li><Link to={'/chef-contact'} className="nav-link">Contact</Link></li>
        <li><Link to={'/team-contact'} className="nav-link">Team</Link></li>
        <li><Link to={'/about'} className="nav-link">About</Link></li>
      </StyledList>

    </Menu>
  );
};
