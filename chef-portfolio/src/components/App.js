import React from 'react';
import './App.css';
import NewRecipes from './Home/NewRecipes'
import About from './About/About'
import Team from './About/Team'
import Contact from './About/Contact'
import ChefContact from './About/ChefContact'
import Slider from './Home/Slider'
import Login from './Login/Login'
import Register from './Login/Registration'
import { Link, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />

      {/* Header */}
      <div className='header'>
        <Link to='/'><h1>Chef Portfolio</h1></Link>
        <button className='hamburger'>
          Hamburger
        </button>
      </div>

      {/* Components */}
      <div className='slider'>
        <Route path='/' exact render={(props) => <Slider {...props} />} />
      </div>
      <div className='new-recipes'>
        <Route path='/' exact render={(props) => <NewRecipes {...props} />} className='new-recipes-route'/>
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
    </div>
  );
}

export default App;
