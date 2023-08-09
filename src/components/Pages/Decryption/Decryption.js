import { useState, useCallback, } from 'react';
import axios from '../../../axios/axios';

import classes from './Decryption.module.css';
import Card from '../../UIs/Card/Card';
import Dropzone from '../../Dropzone/Dropzone';
import Spinner from '../../UIs/Spinner/Spinner';
import Modal from '../../UIs/Modal/Modal';

const Decryption = () =>{
    const [state, setState] = useState({
        message: '',
        secret: '',
        secretIv: '',
        files: [],
        preview: [],
        loading: false,
        msg: { status: false, text: '' },
    });

    const handleInputChange = e =>{//handle all input change
        e.preventDefault();
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onDrop = useCallback(acceptedFiles => {//handle file drop on dropzone
        setState(prevState =>({
            ...prevState,
            preview: acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file),
            })),
            files: acceptedFiles,
        }));
    }, []);

    const handleDecryption = async() =>{
        setState(prevState =>({
            ...prevState,
            loading: true, //turn on loading effect
        }));
        try {
            const formData = new FormData();
            formData.append('secret_key', state.secret);
            formData.append('secret_iv', state.secretIv);
            formData.append('stegnograph', state.files[0]);
            const { data } = await axios.post(`/crypto-stego/decrypt`, formData);
            
            setState(prevState =>({
                ...prevState,
                loading: false, //turn off loading effect
                msg: {
                    status: true,
                    text: data.status === 'Success' ? data.message || 'Data has been encrypted successfully!':
                        'Failed to encrypt data, please try again',
                },
                message: data.data,
            }));
        } catch (error) {
            const res = error.response.data;
            setState(prevState =>({
                ...prevState, 
                loading: false, //turn off loading effect
                msg: {
                    status: true,
                    text: res.message || 'Something went wrong while encrypting data!',
                },
            }));
        }
    };

    //toggle encryption button
    const disabled = state.files.length === 0 || state.secret === '' || state.secretIv === '' ? true : false;

    return(
        <article className={classes.Decryption}>
            {state.loading && <Spinner close={() => setState(prevState =>({...prevState, loading: false,}))} />}
            {state.msg.status && <Modal show={state.msg.status} close={() =>setState(prevState =>({
                ...prevState, msg: {status: false, text: ''},}))}>{state.msg.text}</Modal>}
            <Card>
                <header><h4>DECRYPTION MODULE</h4></header>
                <section className={classes.Content}>
                    <aside className={classes.Aside}>
                        <p style={{padding: '5px 10px', lineHeight: '1.5rem', }}>
                            Decryption, is the reverse process of encryption. It involves using the correct 
                            encryption keys to transform the ciphertext back into plaintext, making it 
                            readable and understandable. Only individuals possessing the correct encryption 
                            keys can decrypt the ciphertext and access the original message.
                        </p>
                        <p style={{paddingRight: '10px', lineHeight: '1.5rem', borderTop: 'solid 1.5px #eee'}}>
                            <h3>Procedures</h3>
                            <ul>
                                <li>Input the secret key that was used in encrypting the data.</li>
                                <li>Input the vector initialization secret key that was used in
                                    encrypting the data.
                                </li>
                                <li>Drag and drop or click to select the stegnograph i.e the image
                                    that was used to hide the encrypted data.
                                </li>
                                <li>Click on the decrypt button to decrypt the data.</li>
                            </ul>
                        </p>
                    </aside>
                    <div className={classes.Main}>
                        <div className={classes.Row}>
                            <label htmlFor='secret_key' className={classes.Label}>Secret Key</label>
                            <input type='text' value={state.secret} onChange={handleInputChange} name='secret'
                                placeholder='Secret Key Eg. 32, 64, 128, 256' />
                        </div>
                        <div className={classes.Row}>
                            <label htmlFor='secret_iv' className={classes.Label}>Secret IV</label>
                            <input type='text' value={state.secretIv} onChange={handleInputChange} name='secretIv'
                                placeholder='Initialization Vector Eg. 32, 64, 128, 256' />
                        </div>
                        {state.message && (
                                <div  className={classes.Row}>
                                    <label htmlFor='message' className={classes.Label}>Decrypted Data</label>
                                    <textarea cols={10} value={state.message} readOnly></textarea>
                                </div>
                            )}
                        <div>
                            <Dropzone
                                onDrop={onDrop} files={state.preview} />
                        </div>
                    </div>
                </section>
                <footer>
                   <button onClick={handleDecryption} className={classes.Button} 
                    disabled={disabled}>Decrypt</button>
                </footer>
            </Card>
        </article>
    );
};

export default Decryption;