import React from 'react'
import { Link } from 'react-router-dom';
import tabsData from '../../data/tabs.json';
import './header.css'

export default function Header() {
  return (
    <nav className='nav'>
      <ul className='list'>
        {tabsData.map((tab) => (
          <li key={tab.id}>
            <Link to={tab.id}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
