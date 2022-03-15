const EventEmitter = require('events'); //events 모듈 불러오기
//EventEmitter는 events 안에 있는 클래스
//emitter라는 변수에 eventemitter 클래스를 이용해서 만든 인스턴스를 할당, emitter라는 객체 만든다
const emitter = new EventEmitter(); 

emitter.on('SUN', (args)=>{
    console.log('first callback - ', args); //인자는 arg 출력
    //콜백함수에서 아래에 써놓은 이벤트를 접근할 수 있다. args 로...
});

//emitter에 원하는 개수만큼 콜백함수를 등록할 수 있다.
//SUN이라는 이벤트가 발생하면 등록된 두 개의 함수가 호출이 된다.
emitter.on('SUN', (args)=>{
    console.log('second callback - ', args);
});

emitter.emit('SUN', {message : 1}); //SUN이라는 이벤트 발생
emitter.emit('SUN', {message : 2}); //이벤트 이름과, 전달하고자 하는 데이터를 명시
emitter.emit('SUN', {message : 3});
