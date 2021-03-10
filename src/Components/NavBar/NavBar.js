import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'


const NavBar = props => {

    const NavData = props.data

    const buttonsNames = NavData.map((name, index) =>
        <li key={index} className={"header__item"}><NavLink to={`${name.link}`} className={"header__link"}>{name.title}</NavLink>

            {name.subMenu ?
                <ul className={"header__subnav subnav"}>
                    {name.subMenu.map((item,index) =>
                        <li key={index+"sub"} className={"subnav__item"}><NavLink to={`${item.link}`} className={"subnav__link"}>{item.title}</NavLink></li>
                    )}
           </ul> : null}

        </li>
    )


    return (
   <ul className={"header__nav"}>
       {buttonsNames}
   </ul>)
}


export default NavBar;