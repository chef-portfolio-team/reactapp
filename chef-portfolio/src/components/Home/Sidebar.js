
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';


class Toggle extends Component {

    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {

        return (
            <div>
                <div className="hamburgerIcon">
                    <i className="fas fa-bars" onClick={this.toggle}></i>
                </div>
                {this.state.on && <div className='list'>
                    <ul>
                        <li><Link to={'/'} className="nav-link">Home</Link></li>
                        <li><Link to={'/services'} className="nav-link">Services</Link></li>
                        <li><a href="#" className="nav-link">About Us</a></li>
                        <li><Link to={'contactUs'} className="nav-link">Contact Us</Link></li>
                    </ul>
                </div>}


            </div>

        )
    }

}


export default Toggle;