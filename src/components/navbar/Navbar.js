import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>
                <img
                    src="logo.svg"
                    alt="RajpatiAndAssociates.png"
                    className="logo-navbar"
                />
            </Link>
            <Link to="/getstarted" className="nav-btn">
                Get Started
            </Link>
        </div>
    );
};

export default Navbar;
