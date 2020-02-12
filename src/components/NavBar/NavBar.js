import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducers/authReducer";
import "./NavBar.css";
import {logoutUser} from "../../redux/reducers/authReducer"

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

<<<<<<< HEAD
  render() {
=======

    render(){
        
>>>>>>> master
    return (
      <div>
        <header>
<<<<<<< HEAD
          <Link to="/AllPosts/">
            <h2 id="logo"> Pounds Around Town </h2>
          </Link>

          <ul id="site-nav">
            <Link to="/" className="link">
              <li className="menu-text">GuestLanding</li>
            </Link>
            <Link to="/AllPosts/" className="link">
              <li className="menu-text">All Posts</li>
            </Link>
            <Link to="/UserProfile/" className="link">
              <li className="menu-text">User Profile</li>
            </Link>
            <Link to="/" className="link">
              <li className="menu-text" onClick={this.props.logoutUser}>
                Logout
              </li>
            </Link>

            <li>
              <img
                onClick={this.handleClick}
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
=======
            <Link to="/AllPosts/"><h2 id="logo"> Pounds Around Town </h2></Link>
            
            <ul id='site-nav'>
                <Link to= "/" className="link"><li className='menu-text'>GuestLanding</li></Link>
                <Link to="/AllPosts/" className="link"><li className='menu-text'>All Posts</li></Link>
                <Link to="/UserProfile/" className="link"><li className='menu-text'>User Profile</li></Link>
                <Link to="/" className="link"><li className='menu-text' onClick={logoutUser}>Logout</li></Link>
                
                
                
                <li>
                   
                    <img className="responsive-menu"
                    onClick={this.handleClick}
                    src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' alt='menu icon'/>
                
>>>>>>> master
                </li>
              </Link>
            </ul>
          </ul>
        </header>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(NavBar);