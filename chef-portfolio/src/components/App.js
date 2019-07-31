import React from 'react';
import './App.css';

import Home from '../components/Home'
import Logo from '../img/logo.png'
import SideBar from '../components/Home/Sidebar'
import "../css/Slider.css"
import Toggle from '../components/Home/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/Login'
import Register from '../components/Registration'

class App extends React.Component {


  render() {
    return (
      
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Londrina+Shadow&display=swap" rel="stylesheet"></link>
        
        <Router>
        <div id="App">
        
          <div className='header'>
            <img src={Logo} />
            <div className='hamburger'>
              <nav>
                <ul>
                  <li><Link to={'/'} className="nav-link">Home</Link></li>
                  <li><Link to={'/login'} className="nav-link">Login</Link></li>
                  <li><Link to={'/Register'} className="nav-link">Register</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <Switch>
                    <Route exact path='/' component = {Home}/>
                    <Route path='/Login' component={Login} />
                    <Route path='/Register' component={Register} />
          </Switch>
        </div>
        </Router>

      
      </div>

        
    );
  }
}

export default App;
