import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const isAdmin = useSelector(state => state.authReducer.isAdmin);
  const userPosts = useSelector(state => state.postsReducer.postsByUserId);

  return (
    <div>
      {loggedIn ? (
        <div>
          {isAdmin ? (
            <div>
              <h1>Admin Profile</h1>
            </div>
          ) : (
            <h1>User Profile</h1>
          )}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}
