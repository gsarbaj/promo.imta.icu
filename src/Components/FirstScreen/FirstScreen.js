import React from 'react';
import Button from "../Button/Button";
import './FirstScreen.css';
import BgImage from '../../img/mainGoogle.png'

const FirstScreen = props => {

  return (
   <div className={'hero'}>
       <div className={'hero__img'}>
           <img src={BgImage} alt=""/>
       </div>
       <div className={'hero__wrapper'}>
           <h1 className={'hero__title'}>{props.title}</h1>
           <h2 className={'hero__subtitle'}>{props.subtitle}</h2>
           <div className={'hero__buttons'}>
               <Button link={props.link1} text={props.text1}/>
               <Button link={props.link2} text={props.text2}/>
           </div>
       </div>
   </div>
  );
 }


export default FirstScreen;