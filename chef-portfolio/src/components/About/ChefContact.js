import React from 'react'
import '../About/About.css'

const ChefContact = chefInfo => {
    return (
        <div className='chef-contact-container'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>Chef Contact</h1>
            <h2></h2>
            <h2>Email: rordanramsayisntreal@gmail.com</h2>
            <h2 className='twitter'>Twitter: 
                <a  href="http://www.twitter.com" class="fa fa-twitter"></a>
            </h2>
            <h2 className='instagram'>Instagram: 
                <a  href="http://www.instagram.com" class="fa fa-instagram"></a>
            </h2>
        </div>
    )
}

export default ChefContact;