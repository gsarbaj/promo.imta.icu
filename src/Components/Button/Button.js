import React from 'react';
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";
import SubmitForm from "../Forms/SubmitForm/SubmitForm";

const Button = props => {
    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()

    }

    return (
      <>
          <NavLink to={'/'} onClick={openModal}>{props.text} </NavLink>
          <Modal ref={modalRef}>
             <SubmitForm
                text={"Text"}
                title={"Title"}
                desc={"Description"}
             />

          </Modal>
      </>

  );
 }


export default Button;