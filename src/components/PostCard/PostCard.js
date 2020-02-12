import React, { Component } from 'react';


class PostCard extends Component {
    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <div className="dog-container">
                <div className="dog-container-content" key={this.props.post_id}>
                    <img className="dog-image" src={this.props.pic} alt='Dog'></img>
                    <h5 className="dog-name">{this.props.post_name}</h5>
                    <h5 className="dog-breed">{this.props.breed}</h5>
                    <h5 className="dog-age">{this.props.age}</h5>
                    <h5 className="dog-gender">{this.props.gender}</h5>
                    <h5 className="dog-fixed">{this.props.fixed}</h5>
                    <h5 className="dog-rating">{this.props.rating}</h5>
                    <h5 className="dog-org_name">{this.props.org_name}</h5>
                    <h5 className="dog-bio">{this.props.bio}</h5>
                </div>
            </div>
        )
    }
}

export default PostCard;