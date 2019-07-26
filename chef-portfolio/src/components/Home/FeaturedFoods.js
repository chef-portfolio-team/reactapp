import React from 'react'
import './Home.css'

const FeaturedFoods = featuredFoods => {
     return(
        <div className='featured-container'>
            <button className='left-slider'>◄</button>
            <div className='featured-content'>
                <h2>Diplaying Featured Foods Here</h2>
            </div>
            <button className='right-slider'>►</button>
        </div>
    )
}

export default FeaturedFoods;