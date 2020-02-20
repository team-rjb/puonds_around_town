import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducers/authReducer";
import face_logo_w from '../../stylesheets/design_elements/face_logo_w.svg';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "drop-down-menu"
    };
  }

  handleClick = () => {
    if (this.state.menuStatus === "drop-down-menu-open") {
      this.setState({
        menuStatus: "drop-down-menu-closed"
      });
    } else {
      this.setState({ menuStatus: "drop-down-menu-open" });
    }
  };

  handleLinkClick = () => {
    if (this.state.menuStatus === "drop-down-menu-open") {
      this.setState({
        menuStatus: "drop-down-menu-closed"
      });
    } else {
      this.setState({ menuStatus: "drop-down-menu-open" });
    }
  };

  render() {
    return (
      
        <header className="header">
        <nav className="nav-bar-container">
          <div id="logo-box">
        <img id="face_logo_w" alt="Pounds Around Town" src={face_logo_w} />
          <Link to="/AllPosts/" className="logo-type">
            <h2 id="pounds-around-town"> Pounds Around Town </h2>
          </Link> 
          </div>
        

          <ul id="site-nav">
            <Link to="/AllPosts/" className="link">
              <li className="menu-text">Home</li>
            </Link>
            <Link to="/UserProfile/" className="link">
              <li className="menu-text">Profile</li>
            </Link>
            {this.props.loggedIn ? (
            <Link to="/" className="link">
              <li className="menu-text" onClick={this.props.logoutUser}>
                Logout
              </li>
            </Link>
            ) : (
            <Link to="/" className="link">
              <li className="menu-text">Login</li>
            </Link>
            )}
           
            

            <li>
              <img className="responsive-menu"
                onClick={this.handleClick}
                // className="responsive-menu"
                src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                alt="menu icon"
              />
            </li>
            <ul className={this.state.menuStatus}>
              <Link to="/" className="link" onClick={this.handleLinkClick}>
                <li>Guest Landing</li>
              </Link>
              <Link
                to="/AllPosts/"
                className="link"
                onClick={this.handleLinkClick}
              >
                <li>All Posts</li>
              </Link>
              <Link
                to="/UserProfile/"
                className="link"
                onClick={this.handleLinkClick}
              >
                <li>User Profile</li>
              </Link>
              <Link to="/" className="link">
                <li className="menu-text" onClick={this.props.logoutUser}>
                  Logout
                </li>
              </Link>
            </ul>
          </ul>
          </nav>
        </header>
      // </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
      loggedIn: reduxState.authReducer.loggedIn
  }
}
export default connect(mapStateToProps, { logoutUser })(NavBar);