/*
const year = 2015;
let leap = year % 4;
if (leap == 0) {
    console.log('leap year baby');
} else {
    console.log('normal year homie');
}
*/

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 == 0) {
                return ("Leap year.");
            } else {
                return ("Not leap year.");
            }
        } else {
            return ("Leap year.");
        }
    } else {
        return ("Not leap year.");
    }
}

var leap = isLeap(2010);
console.log(leap);