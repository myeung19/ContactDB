import React, { Component } from 'react';
import axios from "../../util/Util";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class ResetPage extends Component {
    state = {
        isSuccessful: false,
        msg: null
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    };

    handleOnClick = () => {
        const { email } = this.state;
        axios.post("/reset", {
            email: email
        }).then(res => {
            this.setState({
                msg: "Password reset successfully, please check your email"
            })
        })
    };

    render() {
        const { msg } = this.state;
        return (
            <div>
                <h1>Reset</h1>
                {msg ?
                    <p>{msg}</p> : <p>Please enter the email that associate with your account</p>
                }
                <TextField
                    label="E-mail"
                    name="email"
                    fullWidth
                    placeholder="johnDoe123@gmail.com"
                    required
                    type="email"
                    onChange={ this.handleChange }
                    margin="normal"
                />
                <Button
                    onClick={ this.handleOnClick }
                >
                    Reset
                </Button>
            </div>
        );
    }
}

export default ResetPage;