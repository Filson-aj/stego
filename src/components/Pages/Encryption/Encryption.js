import { useState, useCallback } from 'react';
import axios from '../../../axios/axios';

import classes from './Encryption.module.css';
import Card from '../../UIs/Card/Card';
import Dropzone from '../../Dropzone/Dropzone';
import Spinner from '../../UIs/Spinner/Spinner';
import Modal from '../../UIs/Modal/Modal';

const Encryption = () => {
  const [state, setState] = useState({
    data: '',
    secret: '',
    secretIv: '',
    files: [],
    preview: [],
    encryptedData: '',
    loading: false,
    message: { status: false, text: '' }
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    setState((prevState) => ({
      ...prevState,
      preview: acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })),
      files: acceptedFiles
    }));
  }, []);

  const handleEncryption = async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true
    }));

    try {
      const formData = new FormData();
      formData.append('message', state.data);
      formData.append('secret_key', state.secret);
      formData.append('secret_iv', state.secretIv);
      formData.append('image', state.files[0]);
      formData.append('output_path', `${__dirname}/Assets/images`);

      const { data } = await axios.post(`/crypto-stego/encrypt`, formData);

      setState((prevState) => ({
        ...prevState,
        loading: false,
        message: {
          status: true,
          text: data.status === 'Success' ? 'Data has been encrypted successfully!' : 
            'Failed to encrypt data, please try again!'
        },
        encryptedData: data.data
      }));
    } catch (error) {
      console.log('Encryption Error:', error);
      setState((prevState) => ({
        ...prevState,
        loading: false,
        message: {
          status: true,
          text: 'Something went wrong while encrypting data!'
        }
      }));
    }
  };

  const disabled = state.files.length === 0 || state.data === '' || state.secret === '' || state.secretIv === '';

  return (
    <article className={classes.Encryption}>
      {state.loading && <Spinner close={() => setState((prevState) => ({ ...prevState, loading: false }))} />}
      {state.message.status && <Modal show={state.message.status} close={() => setState((prevState) => 
        ({ ...prevState, message: { status: false, text: '' } }))}>{state.message.text}</Modal>}
      <Card>
        <header><h4>ENCRYPTION MODULE</h4></header>
        <section className={classes.Content}>
          <aside className={classes.Aside}>
            <p style={{padding: '5px 10px', lineHeight: '1.5rem', }}>
            Encryption is the process of converting plaintext into ciphertext using cryptographic algorithms and 
            keys. It scrambles the original message in such a way that it becomes unintelligible to anyone 
            without the proper encryption key. Encryption ensures confidentiality by preventing unauthorized 
            individuals from understanding the contents of the message.
            </p>
            <p style={{paddingRight: '10px', lineHeight: '1.5rem', borderTop: 'solid 1.5px #eee'}}>
                <h3>Procedures</h3>
                <ul>
                    <li>Input the data that you want to encrypt and hide in an image.</li>
                    <li>Input the secret key to be was used in encrypting the data.</li>
                    <li>Input the vector initialization secret key to be was used in
                        encrypting the data.
                    </li>
                    <li>Drag and drop or click to select an image file i.e the image
                        that will be used for stegnography of the encrypted data.
                    </li>
                    <li>Click on the encrypt button to encrypt the data.</li>
                </ul>
            </p>
          </aside>
          <div className={classes.Main}>
            <div className={classes.Row}>
              <label htmlFor='data' className={classes.Label}>Encryption Data</label>
              <textarea cols={10} name='data' value={state.data} onChange={handleInputChange} 
                placeholder='Enter the text you want to encrypt'></textarea>
            </div>
            <div className={classes.Row}>
              <label htmlFor='secret_key' className={classes.Label}>Secret Key</label>
              <input type='text' name='secret' value={state.secret} onChange={handleInputChange} 
                placeholder='Secret Key Eg. 32, 64, 128, 256' />
            </div>
            <div className={classes.Row}>
              <label htmlFor='secret_iv' className={classes.Label}>Secret IV</label>
              <input type='text' name='secretIv' value={state.secretIv} onChange={handleInputChange} 
                placeholder='Initialization Vector Eg. 32, 64, 128, 256' />
            </div>
            {state.encryptedData && (
              <div className={classes.Row}>
                <label htmlFor='encryptedData' className={classes.Label}>Encrypted Data</label>
                <textarea cols={10} rows={4} value={state.encryptedData} readOnly></textarea>
              </div>
            )}
            <div>
              <Dropzone onDrop={onDrop} files={state.preview} />
            </div>
          </div>
        </section>
        <footer>
            <button onClick={handleEncryption} className={classes.Button} 
            disabled={disabled}>
                Encrypt
            </button>
        </footer>
    </Card>
</article>
);
};

export default Encryption;