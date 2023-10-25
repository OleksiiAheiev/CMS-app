import React from 'react';

const chartContainerStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  margin: '20px 0',
  textAlign: 'center',
};

const DummyChart = () => (
  <div style={chartContainerStyle}>
    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Dummy Chart Component</p>
  </div>
);

export default DummyChart;
