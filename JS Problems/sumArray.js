function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 81, 63, 98, 90, 23, 44, 56, 78];
var result = getArraySum(numbers);
console.log("TOTAL :", result);