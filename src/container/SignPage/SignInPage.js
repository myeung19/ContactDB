import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class SignInPage extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <Button
                    variant="contained"
                    color="primary"
                    to="/"
                    component={ Link }
                >
                    Sign in
                </Button>
            </div>
        );
    }
}

export default SignInPage;