import React, { Component } from 'react';
import store from "../../../stores/store";
import axios from "../../../util/Util";

class UserHomePage extends Component {
    componentDidMount() {
        const cred = store.getState().cred;
        console.log(cred);
        const { username } = this.props.match.params;
        axios.get("/user/" + username.toString(), {
            auth: cred
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <p>{ this.props.match.params.username}</p>
            </div>
        );
    }
}

export default UserHomePage;