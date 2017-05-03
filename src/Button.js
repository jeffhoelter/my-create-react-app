import React, { Component } from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="Button"><button type="button">{props.title}</button></div>
  );
}

export default Button;
