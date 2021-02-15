function PRIME(n) {
    for (i = 2; i < n; i++) {
        //    console.log(i, n % i);
        if (n % i == 0) {
            return 'NORMAL';
        }
    }
    return 'PRIME';
}
var result = PRIME();
console.log(result);