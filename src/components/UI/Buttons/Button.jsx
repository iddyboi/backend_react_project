import React from "react";
import "./style.scss";

const Button = ({ children }) => {
  return <button className="custom-button">{children}</button>;
};

export default Button;
