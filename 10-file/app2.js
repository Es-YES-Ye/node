const fs = require('fs').promises;

//read a file
fs.readFile('./text.txt', 'utf8')
    .then(data => console.log(data))
    .catch(console.error);

//write a file
fs.writeFile('./file.txt', 'Hello, file!' )
    .catch(console.error);
//promise가 void 타입이기 때문에 아무것도 return 되지 않는다. then은 안 써도 됨

//데이터가 덮어씌워짐
fs.writeFile('./file.txt', 'Hello, file! Good Day!' )
    .catch(console.error);

//기존 데이터는 유지하면서 뒤에 추가하고 싶을 때
fs.appendFile('./file.txt', 'Bye Bye!' )
    .catch(console.error);

//copy (어떤 파일, 어디로 복사)
fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error);
//복사한 파일 열어보면 아무것도 없다. 모든 것이 비동기적으로 
//데이터를 쓰기도 전에 복사했을 수도 있다.

//순차적으로 하고 싶다면,
fs.appendFile('./file.txt', ' See ya! ' )
    .then(()=>{
        fs.copyFile('./file.txt', './file2.txt')
            .catch(console.error);
    })
    .catch(console.error);

//유의: 순서대로 코드를 작성했지만 모든 것은 promise이기 때문에,
//비동기는 순차적으로 될 수도 있고 안 될 수도 있다.
//순서가 중요한 경우라면 then 안에서 해당하는 promise가 다 수행이 된 다음
//특정한 일을 해야 한다.

//folder
fs.mkdir('sub-folder')
    .catch(console.error);

//해당하는 경로의 모든 파일, 폴더들을 읽어올 수 있다.
fs.readdir('./')
    .then(console.log)
    .catch(console.error);

