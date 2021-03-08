import React from 'react';
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";
import SubmitForm from "../Forms/SubmitForm/SubmitForm";
import '../Forms/SubmitForm/SubmitForm.css';
import './Button.css'
import {Data} from "../../Data/GoogleAdRu/DataRu";

const Button = props => {
    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()

    }

    return (
      <>
          <NavLink className={'buttonlink'} to={window.location.pathname} onClick={openModal}>{props.text} </NavLink>
          <Modal ref={modalRef}>
             <SubmitForm
                text={Data.Modal.text}
                title={Data.Modal.title}
                desc={Data.Modal.desc}
             />

          </Modal>
      </>

  );
 }


export default Button;