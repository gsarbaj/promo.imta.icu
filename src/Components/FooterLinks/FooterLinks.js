import React from 'react';
import {NavLink} from "react-router-dom";
import './FooterLinks.css'

const FooterLinks = props => {

    const linksArray = props.array
    const linksRender = linksArray.map((item, index) =>

        <div key={index+item} className={'footer-nav__item'}>
            <h3 className={'footer-nav__title'}>{item.Title}</h3>
            <ul className={'footer-nav__links'}>
                {item.Links.map((link, index) => <li key={index+3*2}><NavLink to={'/ru'+link.link}>{link.Name}</NavLink></li>)}
            </ul>
        </div>

    )

  return (
   <div className={'footer-nav'}>
       {linksRender}
   </div>
  );
 }


export default FooterLinks;