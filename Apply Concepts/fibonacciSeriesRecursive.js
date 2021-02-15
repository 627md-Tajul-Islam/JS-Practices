// [0,1,1,2,3,5,8,13,21]
function fibonacci(n) {
    if (n == 0) {
        return [0]
    } else if (n == 1) {
        return [0, 1];
    } else {
        // calculate array
        var fibo = fibonacci(n - 1);
    }
}