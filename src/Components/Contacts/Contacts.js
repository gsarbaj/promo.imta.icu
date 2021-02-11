import React from 'react';
import style from './Contacts.module.css'

const Contacts = props => {
  return (
   <div className={style.contacts}>
       <div className={style.contacts__wrapper}>
           <div className={style.contacts__item}>
               <img className={style.contacts__icon} src={props.imgCont} alt="Company Contacts"/>
               <a className={style.contacts__tel} href={"tel: " + props.tel}>{props.text}</a>
               <a className={style.contacts__mail} href={"mailto: " + props.email+props.etext}>{props.email}</a>
           </div>
           <a className={style.contacts__item} href={props.link} target="_blank" rel="noreferrer">
               <img className={style.contacts__icon} src={props.imgAdr} alt="Company Address"/>
               <p className={style.contacts__address}>{props.adr}</p>
           </a>
       </div>
   </div>
  );
 }


export default Contacts;