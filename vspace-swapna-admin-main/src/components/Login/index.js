import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './index.css'; // Import CSS file for styling

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate('/home'); // Redirect to the OverviewCards page
  };

  return (
    <div className="login-page">
      <div className="image-container">
        <img src="https://res.cloudinary.com/dagkvnqd9/image/upload/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png" alt="swapna-logo" />
      </div>

      <div className="login-form-container">
        <div className="login-form">
          <h1>Welcome to <span>Swapna Self Drive Cars</span></h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />

            <div className="forgot-password">
              <a href="/">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">Login</button>

            <div className="register">
              <p>Don't have an account? <a href="/">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
