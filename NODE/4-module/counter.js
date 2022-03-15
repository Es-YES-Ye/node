let count = 0;

function increase() {
    count++;
}

function getCount(){
    return count;
}

module.exports.getCount = getCount;
//module.exports.increase = increase;
//참조값을 가지고 있다.
exports.increase = increase;
console.log(module.exports === exports)
console.log(module);

exports = {};
console.log('----exports에 특정값 할당-----')
console.log(module.exports === exports)
exports.increase = increase;
console.log(module);