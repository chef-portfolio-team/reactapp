import React from 'react'
import '../About/About.css'

const Team = teamInfo => {
    return (
        <div className='team-container'>
            <h1>This Is Our Team</h1>
            <div className='portfolio'>
                <h1>Front End</h1>
                <div className='teammate'>
                    <image src='' />
                        <h2>Loralie Flint</h2>
                </div>
                <div className='teammate'>
                    <image src='' />
                    <h2>Ian Castillo</h2>
                </div>
                <h1>Back End</h1>
                <div className='teammate'>
                    <image src='' />
                    <h2>Shawn Kolich</h2>
                </div>
                <div className='teammate'>
                    <image src='' />
                    <h2>Sir Williams</h2>
                </div>
            </div>
        </div>
    )
}

export default Team;