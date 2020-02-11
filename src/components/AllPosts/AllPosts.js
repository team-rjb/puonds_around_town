import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllPosts} from '../../redux/reducers/postsReducer';


class AllPosts extends Component {
    constructor() {
        super();
        this.state = {
           posts: []
        }
    }

    componentDidMount() {
       this.props.getAllPosts();
    }


    render() {
        const { posts } = this.props;

        const postsMapped= posts.map((post, i) => {
            
            return (
                <div key={i}>
                    <h6>{post.pic}</h6>
            <h6>{post.breed}</h6>
            <h6>{post.age}</h6>
            <h6>{post.gender}</h6>
            <h6>{post.fixed}</h6>
            <h6>{post.bio}</h6>
            <h6>{post.rating}</h6>

                </div>
            )})
        return (
            <div>
                <h1>All Dogs</h1>
                {postsMapped}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
      posts: reduxState.postsReducer.posts
    }
}

export default connect(mapStateToProps, { getAllPosts })(AllPosts); 