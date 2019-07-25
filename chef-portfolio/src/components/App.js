import React from 'react';
import './App.css';
import FeaturedFoods from './Home/FeaturedFoods'

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
        <FeaturedFoods />
      </div>
    </div>
  );
}

export default App;
