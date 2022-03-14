//console.log(count);
//console.log(getCount());
//같은 경로에 있는 counter.js를 import 해서 counter에 넣기
const counter = require('./counter.js');

counter.increase();
console.log(counter.getCount());
counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());