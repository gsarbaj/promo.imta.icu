import React from 'react';

const Social = props => {

    const socialArray = props.array
    const socialList = socialArray.map((item, index) =>
       <li key={(index+1)*2}>
           <a href={item.link} target="_blank" rel="noreferrer">
               <img src={item.img} alt={item.name}/>
           </a>
       </li>
    )

  return (
   <ul className={'footer-nav__socials'}>
       {socialList}
   </ul>
  );
 }


export default Social;