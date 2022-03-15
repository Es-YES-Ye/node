const EventEmitter = require('events'); //events 모듈 불러오기
const emitter = new EventEmitter(); 

//등록된 콜백함수를 중지하고 싶을 때는 변수를 따로 뺀다.
const callback1 = (args) =>{
    console.log('first callback - ', args); 
};
emitter.on('SUN', callback1); //콜백함수 전달

emitter.on('SUN', (args)=>{
    console.log('second callback - ', args);
});

emitter.emit('SUN', {message : 1}); //SUN이라는 이벤트 발생
emitter.emit('SUN', {message : 2}); //이벤트 이름과, 전달하고자 하는 데이터를 명시
emitter.removeListener('SUN', callback1); //SUN이라는 이벤트에 등록된 콜백함수1을 제거하겠다.
//emitter.removeAllListeners(); //모든 콜백함수 제거
emitter.emit('SUN', {message : 3});
