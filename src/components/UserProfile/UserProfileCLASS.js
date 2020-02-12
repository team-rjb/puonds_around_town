import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <div>
            <h1>User Profile</h1>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.currentUser_id,
    loggedIn: reduxState.authReducer.loggedIn
  };
};

export default connect(mapStateToProps, {})(UserProfile);