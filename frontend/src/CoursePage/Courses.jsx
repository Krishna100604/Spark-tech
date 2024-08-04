import React from 'react';
import './Courses.css'; // Make sure to adjust the path based on your project structure
import { RiHomeLine, RiDashboardLine, RiUserLine, RiBook3Line, RiInformationLine, RiContactsLine } from 'react-icons/ri'; // Import the required Remix icons
import { Link } from 'react-router-dom';

const Courses = () => {
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("sidebar1");
    sidebar.classList.toggle("active");
  };

  return (
    <div>
      <div className="main-heading">
        <div className="heading1">
          <h1>Explore Training Programs</h1>
        </div>
      </div>

      <div id="sidebar1">
        <div id="sidebar-toggle-btn" onClick={handleSidebarToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="links">
          <a href="#"><RiHomeLine /> home</a>
          <a href="#"><RiDashboardLine /> dashboard</a>
          <Link to="./Profile">
               <RiUserLine /> Profile
          </Link>
          <a href="#"><RiBook3Line /> Classroom</a>
          <a href="#"><RiInformationLine /> About</a>
          <a href="#"><RiContactsLine /> Contact</a>
        </div>
      </div>

      {/* Card Container */}
      <div className="card-container1">
        {/* Card 1 */}
        <div className="card1">
          <div className="card-image">
            <img src="/src/images/Full_Stack.jpg" alt="Card Image" />
          </div>
          <div className="card-content">
            <h2>Full Stack Development</h2>
            <p>
              This is a description of the card's content. It can be a brief
              overview of the course, its duration, and any other relevant
              details.
            </p>
            
            <button className='button-2'>Add to cart</button>
            <button className='button'>Learn More</button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="card-image">
            <img src="/src/images/data-science.jpg" alt="Card Image" />
          </div>
          <div className="card-content">
            <h2>Data Science</h2>
            <p>
              This is a description of the card's content. It can be a brief
              overview of the course, its duration, and any other relevant
              details.
            </p>
            <button className='button-2'>Add to cart</button>
            <button className='button'>Learn More</button>
          </div>
        </div>
      </div>

      {/* Additional Card Containers (similar structure) */}
      <div class="card-container1">
      {/* <!-- card-3 --> */}
      <div class="card">
        <div class="card-image">
          <img src="/src/images/Design.jpg" alt="Card Image" />
        </div>
        <div class="card-content">
          <h2>UI/UX Design</h2>
          <p>
            This is a description of the card's content. It can be a brief
            overview of the course, its duration, and any other relevant
            details.
          </p>
          <button className='button-2'>Add to cart</button>
            <button className='button'>Learn More</button>
        </div>
      </div>
      {/* <!-- card-4 --> */}
      <div class="card">
        <div class="card-image">
          <img src="/src/images/Markiting.png" alt="Card Image" />
        </div>
        <div class="card-content">
          <h2>Marketing</h2>
          <p>
            This is a description of the card's content. It can be a brief
            overview of the course, its duration, and any other relevant
            details.
          </p>
          <button className='button-2'>Add to cart</button>
            <button className='button'>Learn More</button>
        </div>
      </div>
    </div>

    {/* <!-- 3rd --> */}
    <div class="card-container1">
      {/* <!-- card-5 --> */}
      <div class="card">
        <div class="card-image">
          <img src="/src/images/Business.webp" alt="Card Image" />
        </div>
        <div class="card-content">
          <h2>Business</h2>
          <p>
            This is a description of the card's content. It can be a brief
            overview of the course, its duration, and any other relevant
            details.
          </p>
          <button className='button-2'>Add to cart</button>
            <button className='button'>Learn More</button>
        </div>
      </div>
      {/* <!-- card-6 --> */}
      <div class="card">
        <div class="card-image">
          <img src="/src/images/Music.webp" alt="Card Image" />
        </div>
        <div class="card-content">
          <h2>Music</h2>
          <p>
            This is a description of the card's content. It can be a brief
            overview of the course, its duration, and any other relevant
            details.
          </p>
          <button className='button-2'>Add to cart</button>
            <button className='button'>Learn More</button>
        </div>
      </div>
    </div>

      {/* Footer */}
      <div className="footer1">
        <div className="main-section1">
          <div className="first-list1">
            <ul>
              <li>Business</li>
              <li>Teach On Sparktech</li>
              <li>Get The App</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="second-list">
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>Help And Support</li>
              <li>Investor</li>
            </ul>
          </div>

          <div className="third-list">
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Feedback</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
