import React, { Component } from 'react';
import axios from "../../util/Util";
import style from "../SignPage/style";
import store from "../../stores/store";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class ProfilePage extends Component {
    state = {
        username: this.props.data.username,
        ...this.props.data.selfContact,
    };

    handleChange = (evt, opt) => {
        console.log([evt.target.name], evt.target.value);

        if ((opt === "type" || opt === "number") && this.state.phones !== undefined) {
            this.setState({
                phones: [{
                    ...this.state.phones[0],
                    [opt]: evt.target.value
                }]
            })
        } else if(opt === "type" || opt === "number") {
            this.setState({
                phones: [{
                    opt: evt.target.value
                }]
            })
        }


        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value
        });
        console.log(this.state)
    };

    handleButtonOnClick = () => {
        const { username } = this.state;
        const { firstName, lastName, note, number, type} = this.state;
        const { cred } = store.getState();

        axios.patch("/user/" + username, {
            firstName: firstName,
            lastName: lastName,
            phones: [{
                number: number,
                type: type
            }],
            note: note
        }, {
            auth: cred
        })
    };

    render() {
        const { firstName, lastName, phones, note } = this.state;
        console.log(this.state);

        return (
            <div>
                <h1>Profile</h1>
                <TextField
                    label="Firstname"
                    name="firstName"
                    fullWidth
                    value={ firstName }
                    required
                    className={ style.textField }
                    onChange={ (e) => this.handleChange(e, null) }
                    margin="normal"
                />
                <TextField
                    label="Lastname"
                    name="lastName"
                    fullWidth
                    value={ lastName }
                    required
                    className={ style.textField }
                    onChange={ (e) => this.handleChange(e, null)  }
                    margin="normal"
                />
                <div style={ { display: "flex" } }>
                    <Select
                        native
                        value={ phones === undefined ? "" : phones[0].type }
                        name="phoneType"
                        inputProps={ {
                            name: 'type',
                        } }
                        onChange={ (e) => this.handleChange(e, "type") }
                    >
                        <option value="Mobile">Mobile</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Home">Home</option>
                    </Select>
                    <TextField
                        label="number"
                        name="number"
                        fullWidth
                        value={ phones === undefined ? "" : phones[0].number }
                        required
                        className={ style.textField }
                        onChange={ (e) => this.handleChange(e, "number") }
                        margin="normal"
                    />
                </div>
                <TextField
                    label="note"
                    name="note"
                    fullWidth
                    value={ note }
                    required
                    className={ style.textField }
                    onChange={ (e) => this.handleChange(e, null)  }
                    margin="normal"
                />
                <Button
                    onClick={this.handleButtonOnClick}
                    color="primary"
                >
                    Save
                </Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cred: state.cred,
    };
}

export default connect(mapStateToProps, null)(ProfilePage);