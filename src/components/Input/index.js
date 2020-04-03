import React from "react";

// STYLE BUTTON
import "./input.css";

function Input(props){
  return(
        <input class={props.color} type={props.type} placeholder={props.placeholder} />
  );
}

export default Input;