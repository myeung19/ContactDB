import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/action";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "../../util/Util";
import style from "../SignPage/style";

class SignInPage extends Component {
    state = {
        isError: false,
    };

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleFormSubmit = (evt) => {
        evt.preventDefault();
        const { username, password } = this.state;
        const cred = {
            username: username,
            password: password
        };
        console.log(username, password);
        axios.post("/login", {}, {
            auth: cred
        }).then(() => {
            this.props.login(true, cred);
            this.setState({ isLogin: true })
        }).catch(() => {
            this.setState({ isError: true })
        })
    };

    render() {
        const { isError, isLogin, username } = this.state;

        if (isLogin) {
            return <Redirect to={ "/u/" + username } />
        }

        return (
            <div className={ style.container }>
                <h1>Sign in</h1>
                {
                    isError ? <p>Error! Incorrect credential or account doesn't exist!</p> : null
                }
                <form noValidate autoComplete="true"
                      onSubmit={ this.handleFormSubmit }>
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
                    <br />
                    <br />
                    <br />
                    <Button
                        to="/reset"
                        component={ Link }
                    >
                        Reset password
                    </Button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.isLogin,
    };
}

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);