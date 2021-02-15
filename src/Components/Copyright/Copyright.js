import React from 'react';
import './Copyright.css'

const Copyright = props => {
  return (
   <div className={'copyright'}>
            <span>{props.text}</span>
   </div>
  );
 }


export default Copyright;