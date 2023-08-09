const crypto = require('crypto');

const decrypt = (encData, key, iv) =>{
    const decipher = crypto.createDecipheriv('aes-256-ccm', key, iv);
    let decryptedData = decipher.update(encData, 'utf-8', 'hex');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
};


export default decrypt;