import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-section">
        <div className="first-list">
          <ul>
            <li>Business</li>
            <li>Teach on SparkTeck</li>
            <li>Get the app</li>
            <li>About us</li>
          </ul>
        </div>

        <div className="second-list">
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and support</li>
            <li>Investor</li>
          </ul>
        </div>

        <div className="third-list"> {/* Corrected class name */}
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Feedback form</li>
            <li>Contact us</li>
          </ul>
        </div> 
      </div>
      
      {/* Language Dropdown inside the footer */}
      <div className="language-dropdown">
        <select>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          {/* Add more language options as needed */}
        </select>
      </div>
    </div>
  );
};

export default Footer;
