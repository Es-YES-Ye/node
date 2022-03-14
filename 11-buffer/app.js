//buffer : fixed-size chuvk of memory
//array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf); //unicode
console.log(buf.length); 
console.log(buf[0]); //ascii code
console.log(buf[1]);
console.log(buf.toString()); //문자열
console.log(buf.toString()); //옵션으로 인코딩을 쓸 수 있다. 기본은 utf8

//create
const buf2 = Buffer.alloc(2); //데이터가 들어있을 수도 있으므로 초기화하는 것이 좋다.
const buf3 = Buffer.allocUnsafe(2); //초기화하지 않아서 조금 더 빠름
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3); //buf2 내용을 buf3으로 옮겨오기 
console.log(buf2.toString());
console.log(buf3.toString());

//buffer는 문자열이 될 수도 있고, 숫자열이 될 수도 있고
//데이터를 메모리에 있는 데이터 형태로, row 형태로, 바이트 단위로 처리할 수 있게 해준다.

//concat : 여러가지 buffer를 모을 수 있다
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());