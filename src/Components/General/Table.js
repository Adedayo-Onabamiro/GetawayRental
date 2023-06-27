import React from 'react';
import '../../index.css'; // Import your CSS file for styling (optional)

const Table = ({selectedItem}) => {
  // Define your table data
  // const tableData = [
  //   'Model',
  //   'Audi',
  //   'Mark',
  //   'A1',
  //   'Year',
  //   '2012',
  //   'Doors',
  //   '4/5',
  //   'AC',
  //   'Yes',
  //   'Transmission',
  //   'Manual',
  //   'Fuel',
  //   'Gasoline',
  // ];
  const { model, mark, year, doors, transmission, fuel } = selectedItem;


  return (
    // <table className="table">
    //   <tbody>
    //     {tableData.map((item, index) => (
    //       index % 2 === 0 ? (
    //         <tr key={index}>
    //           <td>{item}</td>
    //           {tableData[index + 1] && (
    //             <>
    //               <td>{tableData[index + 1]}</td>
    //             </>
    //           )}
    //         </tr>
    //       ) : null
    //     ))}
    //   </tbody>
    // </table>
    <table className="table">
    <tbody>
      <tr>
        <td className="table-cell">Model:</td>
        <td className="table-cell">{model}</td>
      </tr>
      <tr>
        <td className="table-cell">Mark:</td>
        <td className="table-cell">{mark}</td>
      </tr>
      <tr>
        <td className="table-cell">Year:</td>
        <td className="table-cell">{year}</td>
      </tr>
      <tr>
        <td className="table-cell">Doors:</td>
        <td className="table-cell">{doors}</td>
      </tr>
      <tr>
        <td className="table-cell">Transmission:</td>
        <td className="table-cell">{transmission}</td>
      </tr>
      <tr>
        <td className="table-cell">Fuel:</td>
        <td className="table-cell">{fuel}</td>
      </tr>
    </tbody>
  </table>
  );
};

export default Table;
