import React from 'react';
import './Tel.css'

const Tel = props => {
  return (
   <>
       <a className={"tel"} href={"tel: " + props.tel}>{props.text}</a>
   </>
  );
 }


export default Tel;