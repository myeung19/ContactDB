import React, { Component } from 'react';

class UserHomePage extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.match.params.username}</p>
            </div>
        );
    }
}

export default UserHomePage;