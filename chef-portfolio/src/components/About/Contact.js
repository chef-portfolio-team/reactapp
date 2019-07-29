import React from 'react'
import '../About/About.css'

const Contact = contactInfo => {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <div className='contact-info-container'>
                <div className='teammate-info'>
                    <h2>Loralie Flint</h2>
                    <div className='contact-info'>
                        <a href='https://github.com/LoralieFlint'>GitHub</a>
                        <a href='https://www.linkedin.com/in/loralie-flint'>LinkedIn</a>
                        <a href='https://twitter.com/evforlife41812'>Twitter</a>
                    </div>
                </div>
                <div className='teammate-info'>
                    <h2>Ian Castillo</h2>
                    <div className='contact-info'>
                        <a href=''>GitHub</a>
                        <a href=''>LinkedIn</a>
                        <a href=''>Other</a>
                    </div>
                </div>
                <div className='teammate-info'>
                    <h2>Shaun Kolich</h2>
                    <div className='contact-info'>
                        <a href=''>GitHub</a>
                        <a href=''>LinkedIn</a>
                        <a href=''>Other</a>
                    </div>
                </div>
                <div className='teammate-info'>
                    <h2>Sir Williams</h2>
                    <div className='contact-info'>
                        <a href=''>GitHub</a>
                        <a href=''>LinkedIn</a>
                        <a href=''>Other</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;