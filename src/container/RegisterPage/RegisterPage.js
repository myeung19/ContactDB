import React, { Component } from 'react';

class RegisterPage extends Component {
    handleOnClick = () => {
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <button onClick={this.handleOnClick}>Register</button>
            </div>
        );
    }
}

export default RegisterPage;