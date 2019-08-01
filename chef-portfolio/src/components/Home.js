import React from 'react'
import Slider from '../components/Home/Slider'
import Recipes from './Home/Recipes'
import { Link } from 'react-router-dom'
import './Home/Home.css'

function Home (){
    return (
        <div>
          <div>
          <Slider />
          </div>
        <div>
          <Recipes />
        </div>
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
      
        
)


}
export default Home;