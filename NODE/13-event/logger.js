//어떤 일이 수행하기 전과 후에 이벤트를 발생해본다.
const EventEmitter = require('events'); //events 모듈 불러오기
const emitter = new EventEmitter(); 
// //log라는 함수를 이용하면 특정한 callback함수 전과 후에 시작했다 끝났다를 알려준다
class Logger extends EventEmitter{
    log(callback){
        this.emit('log', 'started..');  //클래스에 있는 함수라서 this를 붙인다
        callback();
        this.emit('log', 'ended!');
    }    
}
//다른 곳에 사용할 수 있도록 export
module.exports.Logger = Logger;