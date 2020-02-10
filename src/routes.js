import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from './components/GuestLanding/GuestLanding';
import AllPosts from './components/AllPosts/AllPosts';
import AddPost from './components/AddPost/AddPost';
import UserProfile from './components/UserProfile/UserProfile';


export default (
    <Switch>
        <Route component={GuestLanding} exact path ="/"/> 
        <Route component={AllPosts} exact path="/AllPosts/"/>
        <Route component={UserProfile} exact path="/UserProfile/"/>
        <Route component={AddPost} exact path="/AddPost/"/>
       
    </Switch>
)