import React, { Component } from 'react';
import AllPosts from "../AllPosts/AllPosts"

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
                <AllPosts />
            </div>
        )
    }
}

export default GuestLanding;