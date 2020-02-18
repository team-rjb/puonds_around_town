import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../redux/reducers/postsReducer';

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
                    <h4 className="dog-name">Name: {this.props.post_name}</h4>
                    <h4 className="dog-breed">Breed: {this.props.breed}</h4>
                    <h4 className="dog-age">Age: {this.props.age}</h4>
                    <h4 className="dog-gender">Gender: {this.props.gender}</h4>
                    <h4 className="dog-fixed">Fixed?: {this.props.fixed}</h4>
                    <h4 className="dog-rating">Rating: {this.props.rating}</h4>
                    <h4 className="dog-org_name">Organization: {this.props.org_name}</h4>
                    <h5 className="dog-bio"> Bio: {this.props.bio}</h5>
                    {this.props.isAdmin ? (null) : (<button onClick = {() => this.props.addToFavorites(this.props.post_id)}>Favorite</button>)}
                </div>
            </div>
        )
    }
}

export default connect(null, {
    addToFavorites,
})(PostCard);