<<<<<<< HEAD
import React, { useEffect } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllPosts } from "../../redux/reducers/postsReducer";
import { Redirect } from "react-router-dom";

=======
import React, { Component } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
>>>>>>> master

function GuestLanding() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const authState = useSelector(state => state.authReducer);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);





  return (
    <div>
        {loggedIn? ( 
        <Redirect to="/UserProfile/" /> 
        ):(
            <div>
<<<<<<< HEAD
            <h1>GuestLanding </h1>
      <Login />

      <Register />
      </div>
      )}
      
    </div>
  );
=======
                <h1>GuestLanding </h1>
                <Login />
                <Register />
            </div>
        )
    }
>>>>>>> master
}

export default GuestLanding;
