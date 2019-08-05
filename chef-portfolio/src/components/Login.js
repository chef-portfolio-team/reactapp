import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Action/Action';
import styled from 'styled-components';


class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    login = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        console.log(this.state, "from Login")

        const BackGround = styled.div`
        background-color: #2d3436;
        background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
        width:100%;

        `;

        return (
            <BackGround>
                <h1>Please Login:</h1>
                <form onSubmit={this.login}>
                    <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.changeHandler}></input>
                    <input type="text" placeholder="Password" value={this.state.password} name="password" onChange={this.changeHandler}></input>
                    <button>Login</button>
                </form>
            </BackGround>
            
        );
    }
}

export default connect(null, {login} ) (Login);