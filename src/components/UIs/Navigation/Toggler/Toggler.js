import classes from './Toggler.module.css';

const Toggler = props => <div className={classes.Toggler} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
</div>;

export default Toggler;