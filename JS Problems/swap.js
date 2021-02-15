/*
var a = 5;
var b = 7;
console.log("before Swap: a=", a, ",b=", b);
var temp = a;
a = b;
b = temp;
console.log("after Swap: a=", a, ",b=", b);
*/
/*
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x=", x, "y=", y);
*/

var p = 5;
var q = 7;
[p, q] = [q, p];
console.log("after swap: p=", p, "q=", q);