const fs = require('fs');

//stream은 이벤트 베이스
const readStream = fs.createReadStream('./file.txt',{
    highWaterMark: 8,
    encoding: 'utf-8',
});

const data = [];
readStream.once('data', chunk => {//once: 딱 한번만 처리를 해준다.
    //console.log(chunk);
    data.push(chunk);
    console.count('data');
});

readStream.on('end', () =>{
    console.log(data.join(''));
});
readStream.on('error', error =>{
    console.log(chunk);
});