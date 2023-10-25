import React from 'react';

const tableWrapper = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  margin: '20px 0',
};

const tableStyle = {
  width: '100%',
  border: '1px solid black',
  borderCollapse: 'collapse',
};

const cellStyle = {
  border: '1px solid black',
  padding: '8px',
};

const DummyTable = () => (
  <div style={tableWrapper}>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td style={cellStyle}>Dummy</td>
          <td style={cellStyle}>Table</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DummyTable;
