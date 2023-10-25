import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import tabsData from '../../data/tabs.json';
import './header.css';
import Logo from '../../components/icons/Logo';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="header">
      <Link to='/'>
        <Logo className="logo" />
      </Link>
      <nav className="nav">
        <ul className="list">
          {tabsData.map((tab) => (
            <li key={tab.id}>
              <Link
                className={currentPath.includes(tab.id) ? 'link active' : 'link'}
                to={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
