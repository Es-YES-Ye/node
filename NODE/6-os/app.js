//다양한 운영체제, 서버가 동작하고 있는 그 환경에 대한 정보를 얻어올 때 사용
const os = require('os');

//운영체제마다 새로 줄바꿈을 할 때 들어가는 문자열이 달라지는 경우에 확인
console.log(os.EOL);
console.log(os.EOL === '\n');
console.log(os.EOL === '\r\n');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());