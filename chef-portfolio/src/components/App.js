import React from 'react';
import './App.css';
import FeaturedFoods from './Home/FeaturedFoods'
import NewRecipes from './Home/NewRecipes'
import About from './About/About'
import Team from './About/Team'
import Contact from './About/Contact'
import Slider from './Home/Slider'
import { Link, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Londrina+Shadow&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"></link>

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
      <div className='new-recipes' >
        <Route path='/' exact render={(props) => <NewRecipes {...props} />} className='new-recipes'/>
      </div>
      <div className='about'  >
        <Route path='/about' exact render={(props) => <About {...props} />} className='about'/>
      </div>
      <div className='team'  >
        <Route path='/team' exact render={(props) => <Team {...props} />} className='about'/>
      </div>
      <div className='contact'  >
        <Route path='/contact' exact render={(props) => <Contact {...props} />} className='about'/>
      </div>

      {/* Footer */}
      <div className='footer'>
        <div className='footer-item-container'>
          <h3>About</h3>
          <nav>
            <Link to='/about'>About</Link>
            <Link to='/team'>Team</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </div>
        <div className='footer-item-container'>
        <h3>Connect</h3>
            <nav>
                <a href='https://www.facebook.com/'>FaceBook</a>
                <a href='https://www.pinterest.com/'>Pinterest</a>
                <a href='https://www.twitter.com/'>Twitter</a>
                <a href='https://www.instagram.com/'>Instagram</a>
            </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
