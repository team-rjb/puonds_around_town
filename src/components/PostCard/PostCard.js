import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../redux/reducers/postsReducer';
import nameicon from '../../stylesheets/design_elements/name_icon.svg';
import breedicon from '../../stylesheets/design_elements/breed-icon.svg';
import ageicon from '../../stylesheets/design_elements/age-icon.svg';
import gendericon from '../../stylesheets/design_elements/gender_icon.svg';
import fixedicon from '../../stylesheets/design_elements/fixed_icon.svg';
import ratingicon from '../../stylesheets/design_elements/rating_icon.svg';
import locationicon from '../../stylesheets/design_elements/location_icon.svg';
import bioicon from '../../stylesheets/design_elements/bio-icon.svg';
import favoriteiconwhite from '../../stylesheets/design_elements/favorite_icon_white.svg';
import editiconwhite from '../../stylesheets/design_elements/edit-icon-white.svg';

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
                        <div className="icon-and-info">
                            <img className="icons" src={nameicon} alt="dog tag" />
                            <h4 className="full-dog-name">Name: {this.props.post_name}</h4>
                        </div>
                        <div className="icon-and-info">
                        <img className="breed-icon" src={breedicon} alt="double helix" />
                            <h4 className="full-dog-breed">Breed: {this.props.breed}</h4>
                        </div>
                        <div className="icon-and-info">
                        <img className="icons" src={ageicon} alt="birthday cake" />
                            <h4 className="full-dog-age">Age: {this.props.age}</h4>
                        </div>
                        <div className="icon-and-info">
                        <img className="icons" src={gendericon} alt="gender icons" />
                            <h4 className="full-dog-gender">Gender: {this.props.gender}</h4>
                        </div>
                        <div className="icon-and-info">
                        <img className="icons" src={fixedicon} alt="scissors" />
                            <h4 className="full-dog-fixed">Fixed: {this.props.fixed}</h4>
                        </div>
                        <div className="icon-and-info">
                        <img className="icons" src={ratingicon} alt="star" />
                            <h4 className="full-dog-rating">Rating: {this.props.rating}</h4>
                        </div>
                        <div className="icon-and-info">
                        <img className="icons" src={locationicon} alt="dog house" />
                            <h4 className="full-dog-org_name">Organization: {this.props.org_name}</h4>
                        </div>
                        <div className="icon-and-info">
                        <img className="icons" src={bioicon} alt="open book" />
                            <section className="bio-chunk">
                                <h5 className="full-dog-bio"> <span className="bio-header">Bio: </span> {this.props.bio}</h5>
                            </section>
                        </div>
                        {this.props.isAdmin ? (<img onClick={() => this.props.editPost(this.props.post_id)} className="edit-icon-white" src={editiconwhite} alt="pencil"/>) : (<img onClick={() => this.props.addToFavorites(this.props.post_id)} className="fav-icon-white" src={favoriteiconwhite} alt="heart"/>)}
                    </section>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    addToFavorites,
})(PostCard);