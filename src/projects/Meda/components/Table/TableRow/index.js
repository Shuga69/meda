import React from "react";

const TableRow = ({ data, status, statusStyle }) => {
  console.log(data);
  return (
    <tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
      <td style={statusStyle}>{status}</td>
    </tr>
  );
};

export default TableRow;
