import React from 'react';
import B25Form from "./Form25/Form25";
import './SubmitForm.css'
import Form25 from "./Form25/Form25";

const SubmitForm = props => {
  return (
   <section className={'feedback2'}>
    <div className={'feedback__wrapper2'}>

        <div className={'feedback__content2'}>
            <span className="feedback__text2">{props.text}</span>
            <h2 className="feedback__title2">{props.title}</h2>
            <p className="feedback__desc2">{props.desc}</p>

            <Form25/>



    </div>
    </div>

   </section>
  );
 }


export default SubmitForm;