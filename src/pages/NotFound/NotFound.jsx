import React from 'react';
import './not-found.css'
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page is not found</h1>
    <Link to='/'><h2>Go to home page</h2></Link>
  </div>
);

export default NotFound;
