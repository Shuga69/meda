import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import "./style.css";
const Table = ({ tbodyData, theadData }) => {
  return (
    <table>
      <thead>
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
              statusStyle={item.style}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
