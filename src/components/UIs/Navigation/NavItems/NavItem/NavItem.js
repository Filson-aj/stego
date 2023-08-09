import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const NavItem = ({ close, link, children }) => {
  const activeClass = ({ isActive }) => isActive ? classes.Active : '';

  return (
    <li className={classes.NavItem} onClick={close}>
      <NavLink to={link} end className={activeClass}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;