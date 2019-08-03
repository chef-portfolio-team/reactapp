import React from 'react'
import Slider from '../components/Home/Slider'
import Recipes from './Home/Recipes'
import RecipeForm from './RecipeForm'
import { Route, } from 'react-router-dom'
import './Home/Home.css'

function Home (){
    return (
      <div>
        <div className='slider-container-home'>
          <Slider />
        </div>
        <div className='recipe-form-container-home'>
          <RecipeForm />
        </div>
        <div className='recipes-container-home'>
          <Recipes />
        </div>
      </div>

      
        
)


}
export default Home;