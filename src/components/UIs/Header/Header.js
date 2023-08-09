import Toggler from '../Navigation/Toggler/Toggler';
import NavItems from '../Navigation/NavItems/NavItems';
import classes from './Header.module.css';

const Header = (props) => {
  const headerClass = classes.Header;
  const togglerClass = classes.Toggler;
  const titleClass = classes.Title;

  return (
    <header className={headerClass}>
      <div className={togglerClass}>
        <Toggler clicked={props.toggler} />
      </div>
      <div className={titleClass}>
        ~~~ CRYPTO-STEGO ~~~
      </div>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default Header;