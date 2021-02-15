//global variable can be accessed from anywhere
// if you use .window it will be global
// window is a js runtime environment
function add(num1, num2) {
    var result = num1 + num2;
    console.log('result inside', result);
    return result;
}
const sum = add(13, 21);
console.log(sum);