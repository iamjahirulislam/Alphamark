import React from 'react';
import './Service.css'

const Service = (props) => {
    const { courseName, subscriptionFee, courseThumbnail, duration } = props.course;
    return (
        <div className="col-md-3  my-3 service-container shadow">

            <div className="card" style={{ "width": "18rem", height: '450px' }}>
                <img className="img-fluid" style={{ height: '250px', overflow: 'hidden' }} src={courseThumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{courseName}</h3>
                    <p>Subscription Fees: $ {subscriptionFee}</p>
                    <p>Course Duration: {duration}</p>
                </div>
                <a href="#" className="btn  course-btn">Subscribe Now</a>
            </div>
        </div>
    );
};

export default Service;