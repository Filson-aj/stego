import classes from './Card.module.css';

const Card = props => <article className={classes.Card} {...props}>{props.children}</article>;

export default Card;