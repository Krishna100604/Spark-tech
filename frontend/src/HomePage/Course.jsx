
import React from 'react';
import './Course.css';

const Course = ({ title, instructor, price, imageUrl }) => {

  return (
    <div className="course-card">
      <img src={imageUrl} alt={title} />
      <div className="course-details">
        <h3>{title}</h3>
        <p>Instructor: {instructor}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Course;
