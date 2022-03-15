//path: 경로, 파일의 경로에 접근하거나 경로에 대해서 무언가를 처리할 때 쓰는 모듈
const { copyFileSync } = require('fs');
const path = require('path');

//경로를 표현하는 방법은 운영체제마다 다를 수있다.
console.log(__dirname);
console.log(__filename);

//POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
//Windows: 'C://temp//myfile.html'

//'c/file.txt'
//경로구분자
console.log(path.sep);
//환경변수구분자
console.log(path.delimiter);

//basename api
console.log(path.basename(__filename)); //특정한 경로 전달, 파일 정보만 읽는다
console.log(path.basename(__filename, '.js')); //두번째 인자로 확장자 제거

//dirname api
console.log(path.dirname(__filename)); //디렉토리 이름만

//extension 
console.log(path.extname(__filename)); //확장자만 출력

//parse
const parsed = path.parse(__filename);//전체 경로 하나하나 분리, object 형태
console.log(parsed);
parsed.root
parsed.name

//string 형태로 변환
const str = path.format(parsed);
console.log(str);

//절대경로 상대경로 확인
//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // C:///Users/
console.log('isAbsolute?', path.isAbsolute('../')); //상대경로

//normalize
//경로에 에러가 있으면 알아서 수정
console.log(path.normalize('./folder////////sub'));

//join
//console.log(__dirname + '/' + 'image');  직접 작성
//console.log(__dirname + path.sep + 'image');  운영체제 구분자 삽입
console.log(path.join(__dirname, 'image')); //join 사용