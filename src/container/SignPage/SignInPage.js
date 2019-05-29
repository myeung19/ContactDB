import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import style from "../SignPage/style";
import TextField from "@material-ui/core/TextField";

class SignInPage extends Component {
    state = {};

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
        console.log(this.state);
    };

    handleFormSubmit = (evt) => {
        if (!evt.target.checkValidity()) {
            // form is invalid! so we do nothing
            alert("form is invalid! ");
        }
        evt.preventDefault();
    };

    render() {
        return (
            <div className={ style.container }>
                <h1>Sign in</h1>
                <form noValidate autoComplete="off" onSubmit={ this.handleFormSubmit }>
                    <TextField
                        label="Username"
                        name="username"
                        fullWidth
                        placeholder="johnDoe123"
                        required
                        className={ style.textField }
                        onChange={ this.handleChange }
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        fullWidth
                        type="password"
                        required
                        className={ style.textField }
                        onChange={ this.handleChange }
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        color="primary"
                    >
                        Sign in
                    </Button>
                </form>
            </div>
        );
    }
}

export default SignInPage;