import Auxs from '../../../../hocs/Auxs/Auxs';
import Dropback from '../../Dropback/Dropback';
import Footer from '../../Footer/Footer';
import NavItems from '../NavItems/NavItems';
import classes from './Sidedraw.module.css';

const Sidedraw = ({ open, close }) => {
  const transClasses = open ? [classes.Sidedraw, classes.Open] : [classes.Sidedraw, classes.Close];
  const sidedrawClass = transClasses.join(' ');

  return (
    <Auxs>
      <Dropback show={open} close={close} />
      <div className={sidedrawClass}>
        <section>
          <h3>~~~ CRYPTO-STEGO ~~~</h3>
          <nav>
            <NavItems close={close} />
          </nav>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </Auxs>
  );
};

export default Sidedraw;