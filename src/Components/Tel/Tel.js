import React from 'react';


const Tel = props => {
  return (
   <>
       <a href={"tel: " + props.tel}>{props.text}</a>
   </>
  );
 }


export default Tel;