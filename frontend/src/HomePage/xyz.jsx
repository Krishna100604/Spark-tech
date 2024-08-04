import React  from 'react';
import './xyz.css'; // Import the CSS file
import {useNavigate} from "react-router-dom";

const LikeComponent = () => {
  const Navigate=useNavigate();
  function handleClickCourse(){

    Navigate("./Courses");
  }
   
  return (
    <section className="online-courses-section">
      <div className="section-content">
        <h2>Welcome to the SparkTech</h2>
        <h3>Unlock Your Potential with Our Online Courses</h3>
        <p>Expand your skills and advance your career with our wide range of expert-led online courses. Whether you're a beginner or an experienced professional, we have something for everyone.</p>
        <button onClick={handleClickCourse}
        
        className="explore-btn">Explore Courses</button>
      </div>
      
    </section>
  );
};

export default LikeComponent;
