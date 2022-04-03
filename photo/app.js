// 계획
//원하는 인자를 받아올 때는 process.argv 를 이용하면 된다.
const os = require('os');
const fs = require('fs');
const path = require('path');

//console.log(process.argv);
// 1. 사용자가 원하는 폴더의 이름을 받아온다
//const workingDir = path.join(os.homedir(), 'Pictures', folder);
//현재 운영체제에 있는 홈디렉토리에, 픽쳐스 폴더 안에, 사용자가 원하는 폴더 안에 

const folder = process.argv[2]; //우리가 작업하고자 하는 폴더
const workingDir = "C:\\Users\\I\\Desktop\\SUN\\programs\\cmder\\node\\photo\\Pictures";
//console.log(workingDir);

if (!folder || !fs.existsSync(workingDir)) {
    console.error('Please enter folder name in Pictures');
//s    return;
}

// 2. 그 폴더 안에 Video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, '\\video');
const capturedDir = path.join(workingDir, '\captured');
const duplicatedDir = path.join(workingDir, '\duplicated');

 console.log(videoDir);
 console.log(capturedDir);
 console.log(duplicatedDir);

//동기적으로 처리가 되야되기 때문에
fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov 는 video로 , png/aae는 captured로, IMG로 시작하는 이름 이면서 E 가 들어있다면 duplicated 폴더로 보낸다.

/* fs.promises
    .readdir(workingDir)
    .then(console.log)
    .catch(console.log); */
    fs.promises
    .readdir(workingDir)
    .then(processFiles)
    .catch(console.log);

    function processFiles(files){
        files.array.forEach((file) => {
            if(isVideoFile(file)){
                console.log('video', file);
            }else if (isCapturedFile(file)){
                console.log('captured', file);
            } else if (isDuplicatedFile(file)){
                console.log('duplicated', file);
            }
        });
    }

    function isVideoFile(file){
        return true;
    }
    function isCapturedFile(file){
        return true;
    }
    function isDuplicatedFile(file){
        return true;
    }