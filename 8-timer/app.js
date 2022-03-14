let num = 1;
const interval = setInterval(() => {
    console.log(num++);
},1000);

//노드 api
setTimeout(() =>{
    console.log('timeout!');
    clearInterval(interval); //해당 interval을 멈춰준다
},6000);