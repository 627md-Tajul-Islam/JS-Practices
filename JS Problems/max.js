/*
var business = 950;
var minister = 650;
var job = 550;

if (business > minister) {
    if (business > job) {
        console.log("Business is Bigger");
    } else {
        console.log("Job is Bigger")
    }
} else {
    if (minister > job) {
        console.log("Minister is bigger");
    } else {
        console.log("Job is Better");
    }
}
*/

var business = 950;
var minister = 650;
var job = 550;

var largeValue = Math.max(business, minister, job);
console.log(largeValue);