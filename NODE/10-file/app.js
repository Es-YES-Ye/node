const fs = require('fs');

//api 제공하는 세 가지 형태
//rename(...., callback(error, data)) 
//try { renameSync(.....) } catch(e) {} 
//promises.rename().then().catch(0) 

try{
    fs.renameSync('./file.txt', './file-new.txt');
} catch(error){
    console.error(error);
}
console.log('hello');

//sync 사용할 때는 try-catch로 잡아야하고,
//동기적으로 수행이 되어서, 이것이 끝날 때까지 다음 줄로 넘어가지 않으므로
//가급적 사용하지 않는 것이 좋다
try{
    fs.renameSync('./text.txt', './text-new.txt');
} catch(error){
    console.error(error);
}
console.log('hello');
//10-file 폴더로 가서 경로 변경 후 실행하면, 파일 이름 변경된 것을 확인할 수 있다.


//비동기적으로 변경, 비동기적일 때는 콜백함수를 전달해야한다.
fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
});
console.log('changed');
//에러가 발생하지 않아서 null로 출력되고 파일 이름은 변경된다.

fs.promises
    .rename('./text2.txt', './text2-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);
// fs.promises
//    .rename('./text.txt', './text-new.txt')
//    .then(() => console.log('Done!')) 에러없이 성공하면 출력
//    .catch((error) => console.error(error)); 에러가 있다면 에러를 출력
