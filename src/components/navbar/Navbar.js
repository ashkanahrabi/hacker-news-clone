import React from "react";
import logo from "styles/assets/logo.gif";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Hacker News logo" className="navbar-logo" />
            <a href="/" className="navbar-brand">Hacker News</a>
        </nav>
    );
};

export default Navbar;