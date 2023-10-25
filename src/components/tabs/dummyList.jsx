import React from 'react';

const listStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '50px',
  listStyleType: 'none',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  margin: '20px 0',
};

const itemStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  margin: '5px 0',
};

const DummyList = () => (
  <ul style={listStyle}>
    <li style={itemStyle}>Item 1</li>
    <li style={itemStyle}>Item 2</li>
    <li style={itemStyle}>Item 3</li>
  </ul>
);

export default DummyList;
