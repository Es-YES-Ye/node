const fs = require('fs');

const data = [];
fs.createReadStream('./file.txt',{

})
    .on('data', chunk => {
    //console.log(chunk);
    data.push(chunk);
    console.count('data');
})
    .on('end', () =>{
    console.log(data.join(''));
})
    .on('error', error =>{
    console.log(chunk);
});