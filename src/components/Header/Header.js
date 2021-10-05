import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import monitorImg from '../../images/laptop.jpg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container py-5">
            <div >
                <div className="container">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="container">
                <div className="row  my-5">
                    <div className="col-md-6">
                        <h1>Take Great Courses from <br /> the World's Best <br /> Institute</h1>
                        <p>Our courses are built in partnership with technology leaders and <br /> are relevant to industry needs</p>
                        <NavLink to="/blogs">
                            <button className="start-btn">Start Learning Now</button>
                        </NavLink>
                    </div>
                    <div className="col-md-6 text-start">
                        <img className="img-fluid rounded w-75" src={monitorImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;