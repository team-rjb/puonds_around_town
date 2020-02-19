import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../redux/reducers/postsReducer';
import nameicon from '../../stylesheets/design_elements/name_icon.svg';

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
                    <section>
                        <img className="full-dog-image" src={this.props.pic} alt='Dog'></img>
                    </section>
                    <section className="dog-info">
                        <div className="icon-and-name">
                            <img className="name-icon" src={nameicon} alt="dog tag" />
                            <h4 className="full-dog-name">Name: {this.props.post_name}</h4>
                        </div>
                        <h4 className="full-dog-breed">Breed: {this.props.breed}</h4>
                        <h4 className="full-dog-age">Age: {this.props.age}</h4>
                        <h4 className="full-dog-gender">Gender: {this.props.gender}</h4>
                        <h4 className="full-dog-fixed">Fixed: {this.props.fixed}</h4>
                        <h4 className="full-dog-rating">Rating: {this.props.rating}</h4>
                        <h4 className="full-dog-org_name">Organization: {this.props.org_name}</h4>
                        <section className="bio-chunk">
                            <h5 className="full-dog-bio"> <span className="bio-header">Bio: </span> {this.props.bio}</h5>
                        </section>
                        {this.props.isAdmin ? (<button>Edit</button>) : (<button onClick={() => this.props.addToFavorites(this.props.post_id)}>Favorite</button>)}
                    </section>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    addToFavorites,
})(PostCard);