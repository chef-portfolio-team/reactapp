import React from 'react'
import '../About/About.css'

const Team = teamInfo => {
    return (
        <div className='about-container'>
            <h1>Team</h1>
            <div className='portfolio'>
                <h2>This Is Our Team</h2>
                <div className='teammate'>
                    <image></image>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Team;