import React from "react";

const TableRow = ({ data, status, statusStyle, rowStyle, styleIndex }) => {
  console.log(data);
  return (
    <tr>
      {data.map((item, i) => {
        return (
          <td
            style={
              i === styleIndex
                ? { color: "#028F68", "font-weight": "500" }
                : rowStyle
            }
            key={item}>
            {item}
          </td>
        );
      })}
      <td style={statusStyle}>{status}</td>
    </tr>
  );
};

export default TableRow;
