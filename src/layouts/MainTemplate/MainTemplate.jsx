import React from 'react';
import Header from '../Header/Header';
import './main-template.css';

const MainTemplate = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
        {children}
    </div>
  );
};

export default MainTemplate;
