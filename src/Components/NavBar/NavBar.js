import React from 'react';
import {NavData} from '../../Data/InstagramAdRu/NavDataRu'
import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

    const buttonsNames = NavData.map((name, index) =>
        <li key={index} className={"header__item"}><NavLink to={`/ru/${name.link}`} className={"header__link"}>{name.title}</NavLink>

            {name.subMenu ?
                <ul className={"header__subnav subnav"}>
                    {name.subMenu.map((item,index) =>
                        <li key={index+"sub"} className={"subnav__item"}><NavLink to={`/ru/${item.link}`} className={"subnav__link"}>{item.title}</NavLink></li>
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