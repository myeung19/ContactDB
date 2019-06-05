import React, { Component } from 'react';

class GlobalStateProvider extends Component {
    state = {
        isLogin: false,
        cred: {
            username: "",
            password: ""
        }
    };

    render() {
        return;
    }
}

export default GlobalStateProvider;