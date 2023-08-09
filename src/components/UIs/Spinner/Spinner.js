import React from 'react';
import classes from './Spinner.module.css';

const Spinner = ({ close }) => (
  <div className={classes.Backdrop} onClick={close}>
    <div className={classes.Loader}></div>
  </div>
);

export default Spinner;
