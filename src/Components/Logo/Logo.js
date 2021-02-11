import React from 'react';
import {NavLink} from "react-router-dom";

const Logo = props => {
  return (

       <NavLink className={"header__logo-link"} to={props.to}>
            <img  className={"header__logo"} src={props.img} alt={props.alt}/>
       </NavLink>

  );
 }


export default Logo;