import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';
import './AboutPage.css'; // Assuming you have a CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Welcome to SparkTech</h1>
        <p>Unlock Your Potential with Our Online Courses</p>
      </div>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Expand your skills and advance your career with our wide range of expert-led online courses. 
          Whether you're a beginner or an experienced professional, we have something for everyone.
        </p>
        <div className="about-icons">
          <div className="icon">
            <FaGraduationCap size={50} />
            <p>Beginner Courses</p>
          </div>
          <div className="icon">
            <FaChalkboardTeacher size={50} />
            <p>Expert Instructors</p>
          </div>
          <div className="icon">
            <FaRocket size={50} />
            <p>Advance Your Career</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
