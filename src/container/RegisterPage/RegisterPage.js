import React, { Component } from 'react';
import style from "./style";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class RegisterPage extends Component {
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
        const { classes } = this.props;

        return (
            <div className={ style.container }>
                <h1>Register</h1>
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
                    <TextField
                        label="Re-type Password"
                        name="re-password"
                        fullWidth
                        type="password"
                        required
                        className={ style.textField }
                        onChange={ this.handleChange }
                        margin="normal"
                    />
                    <TextField
                        label="E-mail"
                        name="email"
                        fullWidth
                        placeholder="johnDoe123@gmail.com"
                        required
                        type="email"
                        className={ style.textField }
                        onChange={ this.handleChange }
                        margin="normal"
                    />
                    <TextField
                        label="Re-type e-mail"
                        name="re-email"
                        fullWidth
                        required
                        type="email"
                        className={ style.textField }
                        onChange={ this.handleChange }
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(style)(RegisterPage);