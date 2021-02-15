// setTimeout is executed when everything is done
// 1000 mile second = 1 second
// we can also set interval
// setInterval will be execute frequently after a fixed time
//SetTimeout Works in a async way
//sync means serial wise tasks
// async means waiting list tasks
function doSomething() {
    console.log(1111);
}
setInterval(function() {
    console.log('doing it');
}, 3000)
console.log(2222);
setTimeout(doSomething);
console.log(3333);
console.log(4444);
console.log(5555);
console.log(6666);