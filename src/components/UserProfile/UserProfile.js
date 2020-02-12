import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


export default function UserProfile() {
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const userPosts = useSelector(state => state.postsReducer.postsByUserId)

    return(
      <div>
        {loggedIn ? (
          <div>
            <h1>User Profile</h1>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }


