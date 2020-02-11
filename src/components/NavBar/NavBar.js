import React from 'react';
import {Link } from "react-router-dom"; 
import "./NavBar.css";

export default class NavBar extends React.Component {
    constructor (){
        super();
        this.state={
            menuStatus: 'drop-down-menu'
        }
    }
    
    handleClick = () => {
        if(this.state.menuStatus === 'drop-down-menu-open'){
            this.setState({
                menuStatus: 'drop-down-menu-closed'
            })
        } else {
            this.setState ({menuStatus: 'drop-down-menu-open'})
        }
    }

    handleLinkClick = () => {
        if(this.state.menuStatus === 'drop-down-menu-open'){
            this.setState({
                menuStatus: 'drop-down-menu-closed'
            })
        } else {
            this.setState ({menuStatus: 'drop-down-menu-open'})
        }
    }



    render(){
    return (
        <div>
            
        <header>
            <h2 id="logo"> Pounds Around Town </h2>
            
            <ul id='site-nav'>
                <Link to= "/" className="link"><li className='menu-text'>GuestLanding</li></Link>
                <Link to="/AllPosts/" className="link"><li className='menu-text'>All Posts</li></Link>
                <Link to="/UserProfile/" className="link"><li className='menu-text'>User Profile</li></Link>
                <Link to="/" className="link"><li className='menu-text'>Logout</li></Link>
                
                
                
                <li>
                   
                    <img
                    onClick={this.handleClick}
                    src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' alt='menu icon'/>
                
                </li>
                <ul className={this.state.menuStatus}>
                    <Link to="/" className="link" onClick={this.handleLinkClick}><li>Guest Landing</li></Link>
                    <Link to="/AllPosts/" className="link" onClick={this.handleLinkClick}><li>All Posts</li></Link>
                    <Link to="/UserProfile/" className="link" onClick={this.handleLinkClick}><li>User Profile</li></Link>
                    <Link to="/" className="link" onClick={this.handleLinkClick}><li>Logout</li></Link>
                   
                </ul>
            </ul>
            </header>
        </div>
    )
    }
}