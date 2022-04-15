import React from "react";

const TableHead = ({ item }) => {
  return (
    <th className='meda-th' title={item}>
      {item}
    </th>
  );
};

export default TableHead;
