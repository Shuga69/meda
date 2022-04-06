import React from "react";
import Text from "../../components/Text";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./style.css";
const MenuItem = ({ image, text, to = "/" }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={match ? `meda-menu-item active` : "meda-menu-item"}>
      {/* <img width='21.33px' height='21.33px' src={<DepartmentIcon />} /> */}
      <div>{image(match)}</div>
      <Text style={{ fontWeight: "500", marginTop: "8px" }} text={text} />
    </Link>
  );
};

export default MenuItem;
