import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import axios from "axios";
import style from "../SignPage/style";
import TextField from "@material-ui/core/TextField";
import GlobalContext from "../context/GlobalContext";

class SignInPage extends Component {
    state = {};

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
        console.log(this.state);
    };

    handleFormSubmit = (evt) => {
        evt.preventDefault();
        const { username, password } = this.state;
        console.log(username, password);
        axios.post("http://localhost:8080/login", {}, {
            auth: {
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <GlobalContext.Consumer>
                { context => (
                    <div className={ style.container }>
                        <h1>Sign in</h1>
                        <p>{ JSON.stringify(context) }</p>
                        {
                            console.log(context)
                        }
                        <form noValidate autoComplete="true" onSubmit={ this.handleFormSubmit }>
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
                )
                }
            </GlobalContext.Consumer>
        );
    }
}

export default SignInPage;