import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducers/authReducer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    const { loginUser } = this.props;
    const { username, password } = this.state;

    loginUser({ username, password });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleLogin}>Login</button>
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

export default connect(mapStateToProps, { loginUser })(Login);
