import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const CourseDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [courses, setCourses] = useState([]);
    const [matchedCourse, setMatchedCourse] = useState({});

    // const { courseName } = matchedCourse;

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    // console.log(courses);

    useEffect(() => {
        const matched = courses.find(course => course.courseId == id);
        setMatchedCourse(matched);
    }, [courses]);

    // console.log(matchedCourse);

    return (
        <div className="regular-container">
            <div className="nav-container py-5 mb-5">
                <div className="container">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="container">
                <div className="text-center my-3 text-white">
                    <h1>{matchedCourse?.courseName}</h1>
                    <h2>$ {matchedCourse?.subscriptionFee}</h2>
                    <p>Starting Date: {matchedCourse?.startDate}</p>
                    <p>Duration: {matchedCourse?.duration}</p>
                    <button className="btn course-btn view-all-btn">Subscribe Now</button>
                </div>
                <div className="text-center w-100">
                    <img className="img-fluid" src={matchedCourse?.coursePicture} alt="" />
                </div>
            </div>
            <div className="pb-3 text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default CourseDetails;