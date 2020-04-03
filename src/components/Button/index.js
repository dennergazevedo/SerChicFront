import React from "react";

// STYLE BUTTON
import "./button.css";

function Button(props){
  return(
        <button className={props.color}>{props.label}</button>
  );
}

export default Button;