import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getAllPostsByUserId,
  getAllFavoritesByUserId
} from "../../redux/reducers/postsReducer";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../Login/Login2"

function GuestLanding() {
  //The hooks below are doing the following:
  //Dispatch is destructuring the "dispatch" hook which is used to send redux commands
  //useSelector is connecting to the Redux store to get state values, and assigning them to
  //the local variables "loggedIn", "isAdmin" and "authState".
  //LoggedIn/IsAdmin are self-explanatory, authState is the entire state value of the authReducer
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const authState = useSelector(state => state.authReducer);
  //This useEffect hook will pull in ALL POSTS into the postsReducer when the user lands on the guest landing page
  //Once a user is marked "logged in" the hook will run again and pull
  //All posts created by that userId (this gives us an array of posts to display to admins)
  //The commented out lines will pull user FAVORITES once we establish that table
  //Note that these hooks are pulling tables to the REDUCER STATE, not to local state
  //Local state can be pulled with the "useSelector" hooks OR MapStateToProps in a class component
  useEffect(() => {
    dispatch(getAllPosts());
    if (loggedIn === true) {
      console.log(
        "Now that you're logged in,",
        authState.currentUsername,
        ", i can get your user table, posts and favorites"
      );
      dispatch(getAllFavoritesByUserId());
      dispatch(getAllPostsByUserId());
    }
    //eslint-disable-next-line
  }, [loggedIn]);


  return (
    <div className="guest-landing-container">
      <div className="register-login-container">
        {loggedIn ? (
          <Redirect to="/UserProfile/" />
        ) : (
            <div>
              <div className='loginForm'>
                <LoginForm />
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default GuestLanding;
