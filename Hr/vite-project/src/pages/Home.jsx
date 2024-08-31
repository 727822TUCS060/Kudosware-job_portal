import React from 'react';
import { useNavigate } from 'react-router-dom';
import jobImage from '../assets/jobs.jpg'; // Make sure you have this image in your assets folder
import './Home.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="content-wrapper">
        {/* Left Side - Image */}
        <div className="image-container">
          <img src={jobImage} alt="Job Search" className="job-image" />
        </div>

        {/* Right Side - Information */}
        <div className="text-container">
          <h1>Find Your Dream Job with JobPortal</h1>
          <p>
            Explore thousands of job listings, tailored recommendations, and connect with top employers in your industry.
          </p>
          <ul>
            <li>Personalized job recommendations</li>
            <li>Easy resume submission</li>
            <li>Real-time application tracking</li>
            <li>Connect with top employers</li>
          </ul>
          <button className="explore-button" onClick={() => navigate('/login')}>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
