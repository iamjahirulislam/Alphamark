import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';
import monitor from '../../images/monitor.PNG';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <Header></Header>
            {/* courses and pricing section */}
            <div className="container my-5 course-price-container">
                <div >
                    <div className="my-5">
                        <h2 className="section-title">Courses &#38; Pricing</h2>
                    </div>
                    <div className="row">
                        {
                            courses.slice(0, 4).map(course => (
                                <div className="col-md-3 my-3 shadow">
                                    <div className="card" style={{ "width": "18rem", height: '400px' }}>
                                        <div className="text-center">
                                            <img className="img-fluid" style={{ height: '250px' }} src={course.courseThumbnail} class="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">$ {course.subscriptionFee}</h1>
                                            <p>{course.courseName}</p>
                                        </div>
                                        {/* <li className="btn course-btn">Subscribe Now</li> */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center my-5">
                        <NavLink to="/services">
                            <button className="btn course-btn view-all-btn shadow">View All Courses</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <hr />
            {/* training section */}
            <div className="container py-5 training-container">
                <div className="row">
                    <div className="col-md-6">
                        <h1><i class="fas fa-video "></i> Our Video Training for Microsoft products and technologies</h1>
                        <p>Choosing our courses you’ll receive a full package of educational materials including lectures, video trainings, books and practical tasks that provide a proper learning process..</p>
                        <button className="btn course-btn view-all-btn">Broswe Courses</button>
                    </div>
                    <div className="col-md-6">
                        <img className="w-75" src={monitor} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;