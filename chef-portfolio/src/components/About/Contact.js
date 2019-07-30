import React from 'react'
import '../About/About.css'

const Contact = contactInfo => {
    return (
        <div className='contact-container'>
            <h1>Programming Team Contact</h1>
            <div className='contact-info-container'>
                <div className='teammate-info'>
                    <h2>Loralie Flint</h2>
                    <div className='contact-info'>
                        <a href='https://github.com/LoralieFlint' className='github'>GitHub</a>
                        <a href='https://www.linkedin.com/in/loralie-flint' className='linkedin'>LinkedIn</a>
                        <a href='https://twitter.com/evforlife41812' className='twitter'>Twitter</a>
                    </div>
                </div>
                <div className='teammate-info'>
                    <h2>Ian Castillo</h2>
                    <div className='contact-info'>
                        <a href='https://github.com/Ian-Castillo' className='github'>GitHub</a>
                        <a href='https://www.linkedin.com/in/iancastillo/' className='linkedin'>LinkedIn</a>
                        <a href='https://twitter.com/Ian_Castillo' className='twitter'>Twitter</a>
                    </div>
                </div>
                <div className='teammate-info'>
                    <h2>Shaun Kolich</h2>
                    <div className='contact-info'>
                        <a href='' className='github'>GitHub</a>
                        <a href='' className='linkedin'>LinkedIn</a>
                        <a href='' className='twitter'>Other</a>
                    </div>
                </div>
                <div className='teammate-info'>
                    <h2>Sir Williams</h2>
                    <div className='contact-info'>
                        <a href='https://github.com/Sir-Williams?tab=repositories' className='github'>GitHub</a>
                        <a href='https://www.linkedin.com/in/sir-williams-abb54618a/' className='linkedin'>LinkedIn</a>
                        <a href='https://twitter.com/sirjwilliams9' className='twitter'>Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;