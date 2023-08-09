import { useState } from "react";

import classes from './Wrapper.module.css';
import Footer from "../../components/UIs/Footer/Footer";
import Header from "../../components/UIs/Header/Header";
import Sidedraw from "../../components/UIs/Navigation/Sidedraw/Sidedraw";

const Wrapper = props => {
    const [open, setOpen] = useState(false);
    return(
        <article className={classes.Wrapper}>
            <Header toggler={() =>setOpen(!open)} />
            <Sidedraw open={open} close={() =>setOpen(false)} />
            <div>side draw</div>
            <main className={classes.Content}>{props.children}</main>
            <Footer />
        </article>
    );
}

export default Wrapper;