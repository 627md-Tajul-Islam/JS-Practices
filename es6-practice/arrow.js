// function double(num) {
//     return num * 2;
// }

// const double = function myFunc(num){
//     return num * 2;
// }

// Arrow function . first e variable er name likha. then parameter pass korese. then arrow functions use kore oi parameter er value pass korese.

//type 1
//const double = num => num * 2;
//const result = double(5);
//console.log(result);

//type 2
// const add = (x, y, z) => x + y + z;
// const result = add(5, 3, 2);
// console.log(result);

//type 3
// const give5 = () => 5;
// const result = give5();
// console.log(result);

// type 4
const largeMath = (x, y, z) => {
    const addition = x + y + z;
    const difference = x - y;
    const multiply = x * y;
    const division = x / y;
    const total = addition + difference + multiply + division;
    return total;
}
const final = largeMath(10, 5, 11);
console.log(final);