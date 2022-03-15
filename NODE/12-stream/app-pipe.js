const fs = require('fs');

const readStream = fs.createReadStream('./file.txt')
const writeStream = fs.createWriteStream('./file4.txt');
const piping = readStream.pipe(writeStream); //stream과 stream을 연결, 읽어온 데이터를 그대로 연결 

piping.on('finish', () =>{
    console.log('done!!');
});
