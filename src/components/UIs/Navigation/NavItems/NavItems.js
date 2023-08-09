import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = ({ close }) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem close={close && close} link='/'>Home</NavItem>
      <NavItem close={close && close} link='/encryption'>Encryption</NavItem>
      <NavItem close={close && close} link='/decryption'>Decryption</NavItem>
    </ul>
  );
};

export default NavItems;