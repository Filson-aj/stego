import classes from './Landing.module.css';
import Card from '../../UIs/Card/Card';
import NavButton from '../../UIs/Navigation/NavButton/NavButton';
import { images, text } from '../../../Assets/constants/data';

const Landing = () =>{
    return(
        <article className={classes.Landing}>
            <aside className={classes.Aside}>
                <h2>~~~ CRYPTOGRAPY & STEGNOGRAPHY ~~~</h2>
                <div>
                    <img src={images.crypto} alt='Crypto stegnograph'  />
                    <p>
                        <span>W</span>elcome to Secure Communication Using Crypto and Stego: 
                        Cryptography and steganography are two prominent techniques that provide a platform for 
                        users to encrypt and securely hide secret messages within image files, allowing for retrieval at 
                        a later time. These methods play crucial roles in ensuring the confidentiality and integrity of 
                        sensitive information in various applications.
                    </p>
                    <hr />
                    <p>
                        Cryptography involves the use of mathematical algorithms and principles to transform plaintext messages
                        into unreadable ciphertext. This transformation is achieved through encryption, which leverages 
                        cryptographic keys to encode the original message. The ciphertext can only be deciphered back into 
                        plaintext by authorized individuals possessing the correct decryption keys. Cryptography provides a 
                        robust method for securing data transmission and storage, as well as protecting sensitive information 
                        from unauthorized access.
                    </p>
                </div>
            </aside>
            <section className={classes.Content}>
                <Card>
                    <header><h4>CRYPTO-STEGO</h4></header>
                    <section>
                        <p>{text.cryptography}</p>
                        <hr />
                        <p>{text.stegnography}</p>
                    </section>
                </Card>
                <Card>
                    <header><h4>ENCRYPTION</h4></header>
                    <section><p>{text.encryption}</p> </section>
                    <footer>
                        <NavButton link='/encryption'>Encryption</NavButton>
                    </footer>
                </Card>
                <Card>
                    <header><h4>DECRYPTION</h4></header>
                    <section><p>{text.decryption}</p></section>
                    <footer>
                        <NavButton link='/decryption'>Decryption</NavButton>
                    </footer>
                </Card>
            </section>
        </article>
    );
};

export default Landing;