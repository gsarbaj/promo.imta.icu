import React from 'react';
import style from './CompanyDescription.module.css'

const CompanyDescription = props => {

    const array = props.numbers
    const numbers = array.map((item, index) =>
        <div key={index+1*3} className={style.about__item}>
            <span className={style.about__number}>{item.maxNum}</span>
            <h4 className={style.about__name}>{item.title}</h4>
            <p className={style.about__desc}>{item.desc}</p>
        </div>

    )

  return (
   <section className={style.about}>
        <div className={style.about__wrapper}>
            <h3 className={style.about__subtitle}>{props.subTitle}</h3>
            <h2 className={style.about__title}>{props.title}</h2>
            <p className={style.about__text}>{props.text}</p>
            <img src={props.img} alt={props.title}/>

            <div className={style.about__numbers}>
                {numbers}
            </div>

        </div>
   </section>
  );
 }


export default CompanyDescription;