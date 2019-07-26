import React from 'react';
import './App.css';
import FeaturedFoods from './Home/FeaturedFoods'
import NewRecipes from './Home/NewRecipes'
import Slider from '../components/Home/Slider'

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Londrina+Shadow&display=swap" rel="stylesheet"></link>
      <div className='header'>
        <h1>Chef Portfolio</h1>
        <button className='hamburger'>
          Hamburger
        </button>
      </div>
      <div>
        {/* <FeaturedFoods /> */
        }
        <Slider/>
      </div>
      <div>
        <NewRecipes />
      </div>
      <div className='footer'>
        <div className='footer-item-container'>
          <h3>About</h3>
          <nav>
            <a href='about'>About</a>
            <a href='team'>Team</a>
            <a href='contact'>Contact Us</a>
          </nav>
        </div>
        <div className='footer-item-container'>
          <h3>Connect</h3>
          <nav>
            <a href='fa'>FaceBook</a>
            <a href='pin'>Pinterest</a>
            <a href='twt'>Twitter</a>
            <a href='insta'>Instagram</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
