const crypto = require('crypto');

const encrypt = (data, key, iv) =>{
    const cipher = crypto.createCipheriv('aes-256-ccm', key, iv);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
};


export default encrypt;