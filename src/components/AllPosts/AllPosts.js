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
                    <h3>Dog: {post.breed}</h3>

                </div>
            )})
        return (
            <div>
                <h1>dog</h1>
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