import React from 'react';
import './App.css';
import Recipes from './Home/Recipes'
import About from './About/About'
import Team from './About/Team'
import Contact from './About/Contact'
import ChefContact from './About/ChefContact'
import Slider from './Home/Slider'
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />

        <Router>
        <div id="App">
        
            {/* Header */}
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

          {/* Components */}
      <div className='slider'>
        <Route path='/' exact render={(props) => <Slider {...props} />} />
      </div>
      <div className='new-recipes'>
        <Route path='/' exact render={(props) => <Recipes {...props} />} className='new-recipes-route'/>
      </div>
      <div className='about'  >
        <Route path='/about' exact render={(props) => <About {...props} />} className='about-route'/>
      </div>
      <div className='chef-contact'  >
        <Route path='/chef-contact' exact render={(props) => <ChefContact {...props} />} className='chef-contact-route'/>
      </div>
      <div className='team'>
        <Route path='/team' exact render={(props) => <Team {...props} />} className='team-route'/>
      </div>
      <div className='contact'>
        <Route path='/team-contact' exact render={(props) => <Contact {...props} />} className='team-contact-route'/>
      </div>
      <div className='login'>
        <Route path='/login' exact render={(props) => <Login {...props} />} className='login-contact-route'/>
      </div>
      <div className='register'>
        <Route path='/register' exact render={(props) => <Register {...props} />} className='register-contact-route'/>
      </div>
        </div>

        {/* Footer */}
      <div className='footer'>
        <div className='footer-item-container'>
          <h3>About</h3>
          <nav>
            <Link to='/about'>About</Link>
            <Link to='/chef-contact'>Contact</Link>
            <Link to='/team'>Team</Link>
            <Link to='/team-contact'>Team Contact</Link>
          </nav>
        </div>
        <div className='footer-connect-container'>
        <h3>Connect</h3>
            <nav>
                <a href='https://www.facebook.com/' class="fa fa-facebook"></a>
                <a href='https://www.pinterest.com/' class="fa fa-pinterest"></a>
                <a href='https://www.twitter.com/' class="fa fa-twitter"></a>
                <a href='https://www.instagram.com/' class="fa fa-instagram"></a>
            </nav>
        </div>
      </div>
        </Router>

      
      </div>

        
    );
  }
}

export default App;
