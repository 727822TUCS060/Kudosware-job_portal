import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Kudosware</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
