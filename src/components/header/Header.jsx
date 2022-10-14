import React from "react";
import "./Header.css";

const Header = (props) => {
  const { count } = props;
  return (
    <div className="header">
      <h1 className="title">Employee List</h1>
      <h3 className="employees">
        Employees: {count + 1} to {count + 5}
      </h3>
    </div>
  );
};

export default Header;
