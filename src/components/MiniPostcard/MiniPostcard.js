import React, { Component } from 'react';
import PopUp from '../PopUp/PopUp';

class MiniPostcard extends Component {
    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <div className="mini-dog-container">
                <div className="mini-dog-container-content" key={this.props.post_id}>
                    <PopUp
                        user={this.props.user_id}
                        post_id={this.props.post_id}
                        pic={this.props.pic}
                        post_name={this.props.post_name}
                        breed={this.props.breed}
                        age={this.props.age}
                        gender={this.props.gender}
                        fixed={this.props.fixed}
                        rating={this.props.rating}
                        org_name={this.props.org_name}
                        bio={this.props.bio}
                        isAdmin={this.props.isAdmin}
                    />
                    <h5 className="dog-name">{this.props.post_name}</h5>
                    <h5 className="dog-gender">{this.props.gender}</h5>
                    <h5 className="dog-fixed">Fixed: {this.props.fixed}</h5>
                </div>
            </div>
        )
    }
}

export default MiniPostcard;