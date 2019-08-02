
import styled from 'styled-components';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import MenuLinks from '../Home/MenuLinks'


function SideBar() {
    return (
      // <div id="App">
      <div id="page-wrap">
      <MenuLinks pageWrapId={"page-wrap"} outerContainerId={"App"} />

      {/* <div id="page-wrap"> */}
        
      </div>
    // </div>
    );
  }

export default SideBar;