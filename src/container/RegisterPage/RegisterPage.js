import React, { Component } from 'react';
import style from "./style";
import { withStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import axios from "../../util/Util";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class RegisterPage extends Component {
    state = {
        msg: null,
        isSuccessful: false
    };

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
        console.log(this.state);
    };

    handleFormSubmit = (evt) => {
        evt.preventDefault();
        if (!evt.target.checkValidity()) {
            alert("form is invalid! ");
        }

        const { username, password, re_password, email, re_email } = this.state;
        if (password !== re_password && email !== re_email) {
            this.setState({ errorMsg: "Please make sure your re-types matches your password and email!"})
            return
        }

        axios.post("/register", {
            username: username,
            password: password,
            email: email
        }).then(res => {
            console.log(res);
            this.setState({ isSuccessful: true})
        })
    };

    render() {
        const { classes } = this.props;
        const { msg, isSuccessful } = this.state;

        if (isSuccessful) {
            return <Redirect to="/"/>
        }

        return (
            <div className={ style.container }>
                <h1>Register</h1>
                { msg ?
                    <p>{msg}</p> : null
                }
                <form noValidate onSubmit={ this.handleFormSubmit }>
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
                        name="re_password"
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
                        name="re_email"
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
                        Register
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(style)(RegisterPage);