import React from 'react';
import style from './Partners.module.css'

const Partners = props => {

    const partnerList = props.partners

    const partners = partnerList.map((item, index) =>
        <img key={(index+1)*3} src={item.img} alt={item.partnerName}/>
    )

  return (
   <section className={style.partners}>
       <div className={style.partners__wrapper}>
           {partners}
       </div>

   </section>
  );
 }


export default Partners;