export const PORT = 5000;
export const URL_LOCAL = `http://localhost:${PORT}`;
export const URL_LOCAL_AUTH = `http://localhost:${PORT}/auth`;
export const URL_PRO = 'https://stego-api-onrender.com';
export const URL_PRO_AUTH = 'https://stego-api-onrender.com/auth';

export const images = {
    crypto: require('../images/crypto/crypto.jfif'),
};
export const text = {
    cryptography: `
        Cryptography is the practice of securing communication and data by converting information into an 
        unreadable format, called ciphertext, using mathematical algorithms and encryption techniques. It 
        involves the use of cryptographic keys to encrypt and decrypt messages. The process of converting 
        plaintext (original message) into ciphertext is known as encryption, while the reverse process of 
        converting ciphertext back into plaintext is called decryption. Cryptography ensures the 
        confidentiality, integrity, and authenticity of data, protecting it from unauthorized access or 
        modification.
    `,
    stegnography: `
        Steganography, on the other hand, is the practice of hiding secret information within 
        seemingly innocent carrier files, such as images, audio files, or videos, without arousing suspicion. 
        Unlike cryptography, which transforms the message into an unreadable form, steganography conceals the 
        existence of the message itself. It works by embedding the secret data into the carrier file in a way 
        that is imperceptible to human senses or typical analysis. Steganography provides an additional layer 
        of security, as even if the carrier file is intercepted, the hidden message remains undetectable without 
        prior knowledge or specialized tools.
    `,
    encryption: `
        Encryption is the process of converting plaintext into ciphertext using cryptographic 
        algorithms and keys. It scrambles the original message in such a way that it becomes unintelligible to 
        anyone without the proper decryption key. Encryption ensures confidentiality by preventing unauthorized 
        individuals from understanding the contents of the message.
    `,
    decryption: `
        Decryption, on the other hand, is the reverse process of encryption. It involves using the 
        correct decryption key to transform the ciphertext back into plaintext, making it readable and 
        understandable. Only individuals possessing the correct decryption key can decrypt the ciphertext and 
        access the original message.
    `,
};