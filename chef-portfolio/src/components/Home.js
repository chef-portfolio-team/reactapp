import React from 'react'
import Slider from '../components/Home/Slider'
import NewRecipes from './Home/NewRecipes'

function Home (){
    return (
        <div>
            <div>
          <Slider />
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
        
)


}
export default Home;