import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <main className='main-cards'>
      <div className="card-container">
        <img src="https://www.edubridgeindia.com/blog/wp-content/uploads/2023/04/Java-Full-Stack-Development-Roadmap.jpg" className='card-img' height={120} width={300} />
        <h2 className='card-title'>Java Full-Stack</h2>
        <p className='card-description'> Java Full-Stack course equips you with the skills to develop both the front-end (user interface) and back-end (server-side) of web applications using Java.</p>
        <a href='cardPage' className='card-btn'>Learn More</a>
      </div>

      <div className="card-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9vfsSUQQALRoO2vliHOx8P4u-g3rtquZnV3igHWQpgy5fifeIKAnKEZs25nQZEyaBCI&usqp=CAU" height={200} width={300} />
        <h2 className='card-title'>Python FullStack</h2>
        <p className='card-description'>A Python Full-Stack course dives into the world of building web applications using Python for both the user-facing side (front-end) and the server-side (back-end). </p>
        <a href='cardPage' className='card-btn'>Learn More</a>
      </div>

      
      <div className="card-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9vfsSUQQALRoO2vliHOx8P4u-g3rtquZnV3igHWQpgy5fifeIKAnKEZs25nQZEyaBCI&usqp=CAU" height={200} width={300} />
        <h2 className='card-title'>Python FullStack</h2>
        <p className='card-description'>A Python Full-Stack course dives into the world of building web applications using Python for both the user-facing side (front-end) and the server-side (back-end). </p>
        <a href='cardPage' className='card-btn'>Learn More</a>
      </div>

      <div className="card-container">
        <img src="/src/images/Java-Full-Stack.png" className='card-img' height={200} width={300} />
        <h2 className='card-title'>Course</h2>
        <p className='card-description'>Java Full-Stack course equips you with the skills to develop both the front-end (user interface) and back-end (server-side) of web applications using Java.</p>
        <a href='cardPage' className='card-btn'>Learn More</a>
      </div>
    </main>
  );
};

export default Cards;
