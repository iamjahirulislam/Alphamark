import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [courses, setCouses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCouses(data))
    }, []);
    return (
        <div className="regular-container">
            <div className="nav-container py-5 mb-5">
                <div className="container">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div>
                        <h2 className="section-title text-gray">Courses</h2>
                    </div>
                    {
                        courses.map(course => <Service key={course.courseId} course={course}></Service>)
                    }
                </div>
            </div>

            <div className="pb-3 text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Services;