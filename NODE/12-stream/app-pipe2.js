const fs = require('fs');
const zlib = require('zlib'); //압축할 수 있는 모듈

const readStream = fs.createReadStream('./file.txt')
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip'); //압축모듈과 piping하기 때문에 zip으로
const piping = readStream.pipe(zlibStream).pipe(writeStream); 
//stream과 stream을 연결, 읽어온 데이터를 압축하고, writestream으로 그대로 연결 

piping.on('finish', () =>{
    console.log('done!!');
});

//piping은 서버를 만들 때도 도움 된다.
const http = require('http');
const server = http.createServer((req, res)=>{
    fs.readFile('file.txt', (err, data) => { //파일을 다 읽은 다음, 메모리에 들어온 데이터를
        res.end(data); //반응해서 보내준다.
    });
});
server.listen(3000);

//위보다는 아래처럼
const http2 = require('http');
const server2 = http2.createServer((req, res)=>{
    const stream = fs.createReadStream('./file.txt'); //stream 자체를
    stream.pipe(res) //response에 piping해서 연결해주면 좋다.
});
server.listen(3000);
