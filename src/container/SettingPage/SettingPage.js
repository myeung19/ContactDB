import React, { Component } from 'react';
import style from "../SignPage/style";
import store from "../../stores/store";
import TextField from "@material-ui/core/TextField";
import axios from "../../util/Util";
import Button from "@material-ui/core/Button";

class SettingPage extends Component {
    state = {
        isSuccessful: false
    };

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
        console.log(this.state);
    };

    handleButtonOnClick = (evt) => {
        const { oldPassword, newPassword } = this.state;
        const { cred } = store.getState();

        if(oldPassword === "" || newPassword === ""){
            return
        }

        axios.post("/changePassword", {
            oldPassword: oldPassword,
            newPassword: newPassword,
        }, {
            auth: cred
        }).then(res => {
            console.log(res);
            this.setState({ isSuccessful: true})
        })
    };

    render() {
        const { isSuccessful } = this.state;

        return (
            <div>
                <h1>Setting</h1>
                {isSuccessful ?
                    <p>Password changed successfully</p> : null
                }
                <TextField
                    label="Old Password"
                    name="oldPassword"
                    fullWidth
                    type="password"
                    required
                    onChange={ this.handleChange }
                    margin="normal"
                />
                <TextField
                    label="New Password"
                    name="newPassword"
                    fullWidth
                    type="password"
                    required
                    onChange={ this.handleChange }
                    margin="normal"
                />
                <Button
                    color="primary"
                    onClick={this.handleButtonOnClick}
                >
                    Reset
                </Button>
            </div>
        );
    }
}

export default SettingPage;