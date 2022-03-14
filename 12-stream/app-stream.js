const fs = require('fs');

//stream은 이벤트 베이스
const readStream = fs.createReadStream('./file.txt',{
    highWaterMark: 8, //buffer size 결정, default 64kbytes
    encoding: 'utf-8',
});


readStream.on('data', chunk => { //on: 데이터가 발생할 때마다 콜백함수가 수행
    //console.log(chunk);
    console.count('data');
});

readStream.on('error', error =>{
    console.log(chunk);
});
