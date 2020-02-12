<<<<<<< HEAD
import React, { useEffect } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getAllPostsByUserId } from "../../redux/reducers/postsReducer";
import { Redirect } from "react-router-dom";
=======
import React, { Component } from 'react';
import Login from "../Login/Login"
import Register from "../Register/Register"

>>>>>>> master


function GuestLanding() {
//The hooks below are doing the following:
//Dispatch is destructing the "dispatch" hook which is used to send redux commands
//useSelector is connecting to the Redux store to get state values, and assigning them to
//the local variables "loggedIn" and "authState". 
//Loggedin is self-explanatory, authState is the entire state value of the authReducer
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const authState = useSelector(state => state.authReducer);
  const posts = useSelector(state => state.postsReducer.posts)

  //This hook will pull in ALL POSTS into the postsReducer when the user lands on the guest landing page
  //Once a user is marked "logged in" the hook will run again and pull
  //All posts created by that userId (this gives us an array of posts to display to admins)
  //The commented out lines will pull user FAVORITES once we establish that table
  //Note that these hooks are pulling tables to the REDUCER STATE, not to local state
  //Local state can be pulled with the "useSelector" hooks OR MapStateToProps in a class component
  useEffect(() => {
    dispatch(getAllPosts());
    // dispatch(getAllRatings());
    if (loggedIn === true) {
      console.log("Now that you're logged in,",authState.currentUsername, ", i can get your user table, posts and ratings!")
    //   dispatch(getAllRatingsByUserId());
    //   dispatch(getCurrentUser())
      dispatch(getAllPostsByUserId(authState.currentUser_id))
    }
  }, [loggedIn]);




  return (
    <div>
        {loggedIn? ( 
        <Redirect to="/UserProfile/" /> 
        ):(
            <div>
            <h1>Welcome to Pounds Around Town!</h1>
      <Login />

      <Register />
      </div>
      )}
      
    </div>
  );
}

export default GuestLanding;
