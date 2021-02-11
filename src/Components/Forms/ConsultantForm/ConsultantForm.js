import React from 'react';
import B24Form from "./Form24/Form24";
import './ConsultantForm.css'

const ConsultantForm = props => {
  return (
   <section className={'feedback'}>
    <div className={'feedback__wrapper'}>
        <div className={'feedback__img'}>
            <img src={props.img} alt={props.title}/>
        </div>
        <div className={'feedback__content'}>
            <span className="feedback__text">{props.text}</span>
            <h2 className="feedback__title">{props.title}</h2>
            <p className="feedback__desc">{props.desc}</p>
            <B24Form/>


    </div>
    </div>

   </section>
  );
 }


export default ConsultantForm;