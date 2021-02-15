// adding 2 arrays 
// const age1 = [12, 13, 14, 15, 16];
// const age2 = [11, 19, 13, 18, 25];
// const allAges = age1.concat(age2);
// console.log(allAges);

// add array using 3 dots
// const age1 = [12, 13, 14, 15, 16];
// const age2 = [11, 19, 13, 18, 25];
// const age3 = [16, 10, 14, 18, 29];
// const allAges = [...age1, ...age2, ...age3];
// console.log(allAges);


// find the maximum number
// const business = 650;
// const minister = 450;
// const sochib = 250;
// const max = Math.max(business, minister, sochib);
// console.log(max);

// find the maximum number using 3 dots
const business = 650;
const minister = 450;
const sochib = 250;
const money = [650, 450, 250];
const maximum = Math.max(...money);
console.log(maximum);