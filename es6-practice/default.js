function add(num1, num2 = 20) {
    num2 = num2 || 0;
    return num1 + num2;
}
const total = add(100, 1);
console.log(total);