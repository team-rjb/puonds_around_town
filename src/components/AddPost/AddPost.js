import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../redux/reducers/postsReducer';
import { getSession } from '../../redux/reducers/authReducer';
import { withRouter, Link } from 'react-router-dom';
require("dotenv").config();


class AddPost extends Component {
    constructor() {
        super();
        this.state = {
            pic: "",
            post_name: "",
            breed: "",
            age: "",
            gender: "",
            fixed: "",
            bio: "",
            rating: "",
            addPost: false
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddPost = () => {
        const { pic, post_name, breed, age, gender, fixed, bio, rating } = this.state;
        const { addPost } = this.props;
        addPost({ pic, post_name, breed, age, gender, fixed, bio, rating })
    }

    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === 'success') {
            this.setState({ pic: resultEvent.info.url })
        }
    }

    render() {
        let widget
        if (window.cloudinary) {
            widget = window.cloudinary.createUploadWidget(
                {
                    cloudName: `${process.env.REACT_APP_cloudName}`,
                    uploadPreset: `${process.env.REACT_APP_uploadPreset}`,
                    sources: ["local", "url", "facebook", "instagram"],
                    Default: false
                },
                (error, result) => {
                    this.checkUploadResult(error, result)
                    this.checkUploadResult(error, result)
                })
        }
        return (
            <div className="add-post-background">
                <div className="add-post-container">
                    <div className="form-3">
                        <h1>Add a Dog To Your Shelter</h1>
                        <button className="add-post-button-1" name="img" onClick={() => widget.open()}>Add a picture</button>
                        <input className="input-field" name="post_name" placeholder="Name" value={this.state.caption} onChange={this.handleChange} />
                        <input className="input-field" name="breed" placeholder="Breed" value={this.state.caption} onChange={this.handleChange} />
                        <input className="input-field" name="age" placeholder="Age" value={this.state.caption} onChange={this.handleChange} />
                        <input className="input-field" name="gender" placeholder="Gender" value={this.state.caption} onChange={this.handleChange} />
                        <input className="input-field" name="fixed" placeholder="Fixed" value={this.state.caption} onChange={this.handleChange} />
                        <input className="input-field" name="bio" placeholder="Bio" value={this.state.caption} onChange={this.handleChange} />
                        <input className="input-field" name="rating" placeholder="Rating" value={this.state.caption} onChange={this.handleChange} />
                        <Link to="/home">
                            <button className="add-post-button-2" onClick={this.handleAddPost}>Add Your Dog</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.authReducer.user_id
    }
}

export default withRouter(connect(mapStateToProps, {
    addPost,
    getSession
})(AddPost));