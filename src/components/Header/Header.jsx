import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header className="navigation-bar">
      <h1>React Front to Back</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
