import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <div className="regular-container">
            <div className="nav-container py-5 mb-5">
                <div className="container">
                    <Navbar></Navbar>
                </div>

            </div>
            <div className="container text-white bg-about">
                <div className="text-center my-5">
                    <h1>About E-Learning</h1>
                </div>
                <div>
                    <h2>Objectives</h2>
                    <ul>
                        <li>Our main object to teach everyone a particular course from beginning to advance </li>
                    </ul>
                </div>
                <div>
                    <h2>Motivation</h2>
                    <ul>
                        <li>During this pandemic situation, our earth is now house captive. It is right time to learn something new. Because we are wasting our time in facebooking and youtubing.</li>
                    </ul>
                </div>
                <div>
                    <h2>Outcome</h2>
                    <ul>
                        <li>By learning something new our next generation are going to prepare for their upcoming future.</li>
                    </ul>
                </div>
            </div>


            <div className="pb-3 text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;