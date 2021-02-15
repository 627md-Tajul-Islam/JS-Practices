//slice cuts a specific part without changing an array
//splice means it will start from a number and will cut them to the index
// join events helps one to join strings in elements
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = num.splice(2, 5);
console.log(part);