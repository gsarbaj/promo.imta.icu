import React from 'react';
import Social from "../Social/Social";

const About = props => {
  return (
   <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <Social array={props.array}/>
   </div>
  );
 }


export default About;