import React from "react";
import logo from "styles/assets/logo.gif";
import "./navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Hacker News logo" className="navbar-logo" />
            <Link to="/" >
                <span className="navbar-brand">Hacker News</span>
            </Link>
        </nav>
    );
};

export default Navbar;