// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element) {
//     return element * element;
// }

// const number = [3, 4, 5, 6, 7, 8, 9];
// const result = number.map(x => x * x);
// console.log(result);

// filter is used for some special purposes . such as finding odd number
// for each
// reduce
//find -- it only returns the 1st matching condition
const number = [3, 4, 5, 6, 7, 8, 9];
const big = number.filter(x => x > 5);
console.log(big);

// Map uses a loop inside an array and uses its all element to do something. when its done map returns the result as another array