import React, { Component } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

class GuestLanding extends Component {
    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <div>
                <h1>GuestLanding </h1>
                <Login />
                <Register />
            </div>
        )
    }
}

export default GuestLanding;