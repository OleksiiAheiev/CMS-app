import React from 'react';
import Header from '../Header/Header';
import './main-template.css';

const MainTemplate = ({ children, tabsData }) => {
  return (
    <div className='wrapper'>
      <Header tabsData={tabsData} />
      <div className='container'>
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
