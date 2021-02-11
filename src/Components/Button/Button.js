import React from 'react';
import {NavLink} from "react-router-dom";

const Button = props => {
  return (
      <NavLink to={props.link}>{props.text}</NavLink>
  );
 }


export default Button;