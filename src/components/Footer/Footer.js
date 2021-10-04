import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <div className="footer-container text-center mt-5 py-5">
                <h2>This is Footer</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="me-5 text-end">
                        <p>San Francisco, CA 94102, US <br /> 1234 Some St</p>
                    </div>
                    <div className="text-start">
                        <p>Phone: 800 123 4567 <br /> Fax: 1.800.123.4566</p>
                    </div>
                </div>

                <div>
                    <i className="fab fa-facebook-square fa-3x m-2"></i>
                    <i className="fab fa-twitter-square fa-3x m-2"></i>
                    <i className="fab fa-instagram-square fa-3x m-2"></i>
                    <i className="fab fa-linkedin fa-3x m-2"></i>
                </div>
            </div>
            <div className="text-center my-3">
                <p> &#169; 2021 All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;