import classes from './Dropback.module.css';

const Dropback = props => props.show ? <div className={classes.Dropback} onClick={props.close}></div>:null;

export default Dropback;