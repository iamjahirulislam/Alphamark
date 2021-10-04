import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-white">
            <div className="container-fluid">
                <NavLink to="/home" className="navbar-brand" >E-Learning</NavLink >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/home" activeClassName="selected">
                            <li className="nav-link active">Home</li>
                        </NavLink>
                        <NavLink to="/services" activeClassName="selected">
                            <li className="nav-link active">Services</li>
                        </NavLink>
                        <NavLink to="/blogs" activeClassName="selected">
                            <li className="nav-link active">Blogs</li>
                        </NavLink>
                        <NavLink to="/about" activeClassName="selected">
                            <li className="nav-link active">About</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;