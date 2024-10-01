import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">To Do Application</h1>
      <img 
        src={`${process.env.PUBLIC_URL}/image.png`} 
        alt="To Do Task and Calendar" 
        className="home-image" 
      />
      <p className="home-description">
        Organize your tasks efficiently and stay on top of your schedule.
      </p>
    </div>
  );
};

export default HomePage;