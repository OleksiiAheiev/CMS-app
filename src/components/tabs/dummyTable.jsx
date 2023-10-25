import React from 'react';

const tableWrapper = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  margin: '20px 0',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
};

const tableStyle = {
  width: '100%',
  border: '1px solid black',
  borderCollapse: 'collapse',
};

const cellStyle = {
  border: '1px solid black',
  padding: '8px',
  backgroundColor: '#f1f1f1',
};

const DummyTable = () => (
  <div style={tableWrapper}>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={cellStyle}>Header 1</th>
          <th style={cellStyle}>Header 2</th>
        </tr>
        <tr>
          <td style={cellStyle}>Data 1</td>
          <td style={cellStyle}>Data 2</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DummyTable;
