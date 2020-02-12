import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../redux/reducers/postsReducer';
import MiniPostcard from "../MiniPostcard/MiniPostcard";


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
        const postsMapped = posts.map((post, i) => {
            return (
                <div key={i}>
                    <MiniPostcard
                        user={post.user_id}
                        pic={post.pic}
                        post_name={post.post_name}
                        breed={post.breed}
                        age={post.age}
                        gender={post.gender}
                        fixed={post.fixed}
                        rating={post.rating}
                        org_name={post.org_name}
                        bio={post.bio}
                    />
                </div>
            )
        })
        return (
            <div>
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