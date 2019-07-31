import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../Action/Action';

class Register extends Component {
    state = {
        username: "",
        password: "",
        email: '',
        location:'',
    }


    changeHandler = (e) =>{
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
      };


    register = (e) =>{
        e.preventDefault();
        this.props.register(this.state);
    }

    render() {
        console.log(this.state, "from Register")
        return (
            <div>
                <h2>Please Register Below:</h2>
                <form onSubmit={this.register}>
                    <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.changeHandler}></input>
                    <input type="text" placeholder="Password" value={this.state.password} name="password" onChange={this.changeHandler}></input>
                    <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.changeHandler}></input>
                    <input type="text" placeholder="Location" value={this.state.location} name="location" onChange={this.changeHandler}></input>
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {register} ) (Register);