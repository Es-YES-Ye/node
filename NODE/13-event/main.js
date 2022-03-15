const logger = require('./logger.js');
const emitter = new logger.Logger(); //logger.js에 있는 Logger클래스 이용해서 emitter를 만든다. 

emitter.on('log', (event)=>{ //emitter에 log 라는 이벤트가 발생하면
     console.log(event); //콘솔에 이벤트를 출력
});

emitter.log(() => { //emitter 안에 있는 log라는 함수를 이용해서
    console.log('.......doing something!'); //
});