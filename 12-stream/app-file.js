const fs = require('fs');


const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => { //file 읽고
    fs.writeFile('./file2.txt', data, () => {});  //그 데이터를 새로운 file2에 쓰기
    //calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`Consumed Memory : ${consumed}MB`); //메모리 사용 차이점 출력 
});