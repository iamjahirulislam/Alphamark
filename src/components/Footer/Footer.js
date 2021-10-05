import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <div className="footer-container text-center mt-5 py-5">
                <h2>E-Learning</h2> <br />
                <div className="d-flex align-items-center justify-content-center">
                    <div className="me-5 text-end">
                        <p>San Francisco, CA 94102, US <br /> 1234 Some St</p>
                    </div>
                    <div className="text-start">
                        <p>Phone: 800 123 4567 <br /> Fax: 1.800.123.4566</p>
                    </div>
                </div>

                <div>
                    <a className="social-icon" href="https://www.facebook.com/khshakil.ahamed/" target="_blank"><i className="fab fa-facebook-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://twitter.com/KhShakilAhamed" target="_blank"><i className="fab fa-twitter-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://www.instagram.com/khshakil.09/" target="_blank"><i className="fab fa-instagram-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://www.linkedin.com/in/kh-shakil" target="_blank"><i className="fab fa-linkedin fa-3x m-2"></i></a>
                </div>
            </div>
            <div className="text-center my-3">
                <p> &#169; 2021 All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;