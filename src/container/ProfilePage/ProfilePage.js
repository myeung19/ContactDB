import React, { Component } from 'react';
import style from "../SignPage/style";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class ProfilePage extends Component {
    state = {
        // firstName: this.props.data.selfContact.firstName,
        // lastName: this.props.data.selfContact.lastName,
        // phoneType: this.props.data.selfContact.phones[0].type,
        // number: this.props.data.selfContact.phones[0].number,
        // note: this.props.data.selfContact.note
        ...this.props.data.selfContact,
        ...this.props.data.selfContact.phones[0]
    };

    handleChange = evt => {
        console.log([evt.target.name], evt.target.value);
        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value
        });
        console.log(this.state)
    };

    handleButtonOnClick = () => {

    };

    render() {
        const { firstName, lastName, number, type, note } = this.state;
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
                    onChange={ this.handleChange }
                    margin="normal"
                />
                <TextField
                    label="Lastname"
                    name="lastName"
                    fullWidth
                    value={ lastName }
                    required
                    className={ style.textField }
                    onChange={ this.handleChange }
                    margin="normal"
                />
                <div style={ { display: "flex" } }>
                    <Select
                        native
                        value={ type }
                        name="phoneType"
                        inputProps={ {
                            name: 'type',
                        } }
                        onChange={ this.handleChange }
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
                        value={ number }
                        required
                        className={ style.textField }
                        onChange={ this.handleChange }
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
                    onChange={ this.handleChange }
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