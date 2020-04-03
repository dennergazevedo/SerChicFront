import React from "react";

// STYLE BUTTON
import "./label.css";

function Label(props){
  return(
    <span className={props.color}>{props.children}</span>
  );
}

export default Label;