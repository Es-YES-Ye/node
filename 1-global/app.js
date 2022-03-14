const fs =require('fs');
console.log(global);
 
global.hello = () => {
    console.log('hello');
}
 
global.hello();
hello();
 
global.hello2 = () =>{
    global.console.log('hello');
}
 
global.hello2();
