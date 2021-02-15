import React from 'react';
import B25Form from "./Form25/Form25";
import './SubmitForm.css'
import Form25 from "./Form25/Form25";

const SubmitForm = props => {
  return (
   <section className={'feedback'}>
    <div className={'feedback__wrapper'}>

        <div className={'feedback__content'}>
            <span className="feedback__text">{props.text}</span>
            <h2 className="feedback__title">{props.title}</h2>
            <p className="feedback__desc">{props.desc}</p>

            <Form25/>



    </div>
    </div>

   </section>
  );
 }


export default SubmitForm;