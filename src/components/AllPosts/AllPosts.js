import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiniPostcard from "../MiniPostcard/MiniPostcard";


class AllPosts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        
    }


    render() {
        const { posts } = this.props;
        
        const postsMapped = posts.map((post, i) => {
            return (
                <div key={i}>
                    <MiniPostcard
                        user={post.user_id}
                        post_id={post.post_id}
                        pic={post.pic}
                        post_name={post.post_name}
                        breed={post.breed}
                        age={post.age}
                        gender={post.gender}
                        fixed={post.fixed}
                        rating={post.rating}
                        org_name={post.org_name}
                        bio={post.bio}
                        isAdmin={this.props.isAdmin}
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
        posts: reduxState.postsReducer.posts,
        isAdmin: reduxState.authReducer.isAdmin
    }
}

export default connect(mapStateToProps, {})(AllPosts); 