import React from 'react';
import Button from "../Button/Button";

const FirstScreen = props => {
  return (
   <div className={'hero'}>
        <h1 className={'hero__title'}>{props.title}</h1>
        <h2 className={'hero__subtitle'}>{props.subtitle}</h2>
       <div className={'hero__buttons'}>
           <Button link={props.link1} text={props.text1}/>
       </div>
   </div>
  );
 }


export default FirstScreen;