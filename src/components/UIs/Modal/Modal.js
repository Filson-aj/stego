import React, { Fragment } from 'react';
import classes from './Modal.module.css';

const Modal = ({ close, show, children }) => {
  const modalStyle = {
    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: show ? '1' : '0'
  };

  return (
    <Fragment>
      <div className={classes.Backdrop} onClick={close}>
        <div className={classes.Modal} style={modalStyle}>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
