import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Action/Action';


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
        return (
            <div>
                <h1>Please Login:</h1>
                <form onSubmit={this.login}>
                    <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.changeHandler}></input>
                    <input type="text" placeholder="Password" value={this.state.password} name="password" onChange={this.changeHandler}></input>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {login} ) (Login);