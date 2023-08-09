import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './NavButton.module.css';

const NavButton = ({ link, children, ...props }) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(link);

  return (
    <button onClick={handleNavigate} className={classes.Navbutton} {...props}>
      {children}
    </button>
  );
};

export default NavButton;
