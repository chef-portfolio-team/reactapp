import React from 'react'
import Slider from '../components/Home/Slider'
import Recipes from './Home/Recipes'
import RecipeForm from './RecipeForm'
import { Link } from 'react-router-dom'
import './Home/Home.css'

function Home (){
    return (
      <div>
        <div>
          <Slider />
        </div>
        <div>
          <RecipeForm />
        </div>
        <div>
          <Recipes />
        </div>
      </div>

      
        
)


}
export default Home;