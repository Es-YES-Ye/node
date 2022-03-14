console.log('logging...');
console.clear();

//log level
console.log('log'); //개발할 때
console.info('info'); //중요한 정보에 대해 남기고 싶을 때
console.warn('warn'); //그렇게 치명적인 에러는 아닌 경보
console.error('eroor'); //정말 심각한 에러, 사용자 에러, 시스템 에러

//assert
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

//print object
const student = {name: 'ellie', age: 20, company: {name: 'AC'}};
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: false, depth: 2});
console.dir(student, {showHidden: true, colors: false, depth: 0});

//measuring time
console.time('for loop');
for (let i = 0; i < 10; i++){
    i++;
}
console.timeEnd('for loop');

//counting
function a(){
    console.count('a function');
}
a();
console.countReset('a function');
a();

//trace
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}
f1();
