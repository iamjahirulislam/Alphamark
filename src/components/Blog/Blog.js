import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = (props) => {
    const { courseId, courseName, coursePicture, courseDescription } = props.course;
    return (
        <div className="row my-5 bg-light rounded py-2 shadow">
            <div className="col-md-6">
                <img className="img-fluid" src={coursePicture} alt="" />
            </div>
            <div className="col-md-6 ">
                <h3>{courseName}</h3>
                <p>{courseDescription.slice(0, 900)}</p>
                <NavLink to={`/blogs/${courseId}`}>
                    <button className="btn course-btn">Go to Course</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Blog;