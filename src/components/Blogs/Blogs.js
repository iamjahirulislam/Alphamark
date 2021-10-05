import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="regular-container">
            <div className="nav-container py-5 mb-5">
                <div className="container">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="container">
                <h2 className="section-title text-gray">Blogs</h2>
                {
                    courses.map(course => <Blog key={course.courseId} course={course}></Blog>)
                }
            </div>

            <div className="pb-3 text-gray">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;