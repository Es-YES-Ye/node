//노드가 동작하고 있는 프로세스의 정보
const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
    console.log('setTimeout!');
}, 0);

process.nextTick(() => {
    console.log('nextTick!');
});

for(let i =0; i<1000; i++) {
    console.log('for loop');
}