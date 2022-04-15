import React from "react";

const TableRow = ({ data, status, statusStyle, rowStyle, styleIndex }) => {
  return (
    <tr>
      {data.map((item, i) => {
        return (
          <td
            className='meda-td'
            style={
              i === styleIndex
                ? { color: "#028F68", fontWeight: "500" }
                : rowStyle
            }
            key={i}>
            {item}
          </td>
        );
      })}
      <td style={statusStyle}>{status}</td>
    </tr>
  );
};

export default TableRow;
