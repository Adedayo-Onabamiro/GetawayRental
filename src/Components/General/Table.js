import React from 'react';
import '../../index.css'; // Import your CSS file for styling (optional)

const Table = () => {
  // Define your table data
  const tableData = [
    'Model',
    'Audi',
    'Mark',
    'A1',
    'Year',
    '2012',
    'Doors',
    '4/5',
    'AC',
    'Yes',
    'Transmission',
    'Manual',
    'Fuel',
    'Gasoline',
  ];

  return (
    <table className="table">
      <tbody>
        {tableData.map((item, index) => (
          index % 2 === 0 ? (
            <tr key={index}>
              <td>{item}</td>
              {tableData[index + 1] && (
                <>
                  <td>{tableData[index + 1]}</td>
                </>
              )}
            </tr>
          ) : null
        ))}
      </tbody>
    </table>
  );
};

export default Table;
