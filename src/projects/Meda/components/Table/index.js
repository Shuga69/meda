import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import "./style.css";
const Table = ({ tbodyData, theadData, border, rowStyle, styleIndex }) => {
  return (
    <table className='meda-table'>
      <thead style={border ? { borderBottom: "1px solid  #E5EEEB" } : null}>
        <tr>
          {theadData.map((h) => {
            return <TableHead key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return (
            <TableRow
              key={item.id}
              data={item.items}
              status={item.status}
              rowStyle={rowStyle}
              statusStyle={item.style}
              styleIndex={styleIndex}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
