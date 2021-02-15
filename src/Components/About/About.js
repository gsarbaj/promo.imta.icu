import React from 'react';
import Social from "../Social/Social";
import './About.css'

const About = props => {
  return (
   <div className={'about'}>
        <h3 className={'about__title'}>{props.title}</h3>
        <p className={'about__text'}>{props.text}</p>
        <Social array={props.array}/>
   </div>
  );
 }


export default About;