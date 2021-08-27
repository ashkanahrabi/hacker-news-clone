import React from "react";
import "./button.css";

const Button = ({ title, onClick}) => {
    return <button className="button" onClick={onClick}>{title}</button>;
};

export default Button;
