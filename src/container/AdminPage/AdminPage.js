import React, { Component } from 'react';
import axios from "../../util/Util";
import store from "../../stores/store";
import { TextField } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

class AdminPage extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        const { cred } = store.getState();
        axios.get("/user", {
            auth: cred
        }).then(res => {
            console.log(res.data);
            const data = res.data.map(el => {
                return {
                    username: el.username,
                    admin: el.roles.includes("ADMIN")
                }
            });

            this.setState({
                data: data
            });
            console.log(data);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    };

    handleOnClick = () => {
        const { cred } = store.getState();

        // keys.map(k => {
        //     axios.post("/admin/setRole", {
        //         username: k,
        //         admin: this.state[k]
        //     }, {
        //         auth: cred
        //     })
        // }).then(res => {
        //     console.log(res)
        // })
    };

    render() {
        const { data } = this.state;

        return (
            <div>
                <h1>Admin</h1>
                {
                    data ? (
                        data.map((el, i) => (
                                <div key={ i }>
                                    <TextField
                                        label="User"
                                        disabled
                                        value={ el.username }
                                    />
                                    <Switch
                                        onChange={ this.handleChange }
                                        name={ el.username }
                                        checked={el.admin}
                                        color="primary"
                                    />
                                </div>
                            )
                        )) : null
                }
                <br />
                <Button
                    color="primary"
                    onClick={ this.handleOnClick }
                >
                    Save
                </Button>
            </div>
        );
    }
}

export default AdminPage;