import fs from 'fs'

const steggy = require('steggy');
const hide = (encData, imgPath, outputPath) =>{
    const original = fs.readFileSync(imgPath);
    //hide data in the image
    const concealed = steggy.conceal()(original, encData);
    fs.writeSync(outputPath, concealed);
};

const retrieve = imgPath =>{
    const image = fs.readFileSync(imgPath);
    const revealed = steggy.reveal()(image,'utf8')
    return revealed;
};

export {hide, retrieve};