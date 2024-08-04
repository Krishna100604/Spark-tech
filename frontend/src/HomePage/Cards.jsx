import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <main className='main-cards'>
      <div className="card-container">
        <img src="/src/images/Java-Full-Stack.png" className='card-img' height={200} width={300} />
        <h2 className='card-title'>Java Full-Stack</h2>
        <p className='card-description'> Java Full-Stack course equips you with the skills to develop both the front-end (user interface) and back-end (server-side) of web applications using Java.</p>
        <a href='cardPage' className='card-btn'>Learn More</a>
      </div>

      <div className="card-container">
        <img src="/src/images/python.png" className='card-img' height={200} width={300} />
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
