import React, { Component } from 'react';
import {connect} from 'react-redux';
import { registerUser } from "../../redux/reducers/authReducer";


class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            first_name:"",
            email: "",
            isAdmin: false,
            org_id: null
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }
    
      handleRegister = () => {
        const { registerUser } = this.props;
        const { username, password, first_name, email, isAdmin, org_id } = this.state;
        registerUser({username, password, first_name, email, isAdmin, org_id})
      }


    render() {
        return (
            <div>
                <h1>Register</h1>
                <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                <input name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                <input name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange}/>
                <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
      user_id: reduxState.authReducer.user_id
    }
  }

export default connect(mapStateToProps, { registerUser })(Register)