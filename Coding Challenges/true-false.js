// if the value is false [ falsy]
// " "; empty string means false
// 0 if the value is  0. it will false
// if nothing is defined , it will be false automatically. such as let name;
// undefined means false
// null means false
// NaN=not a number--> means false
// let name = false; it means falsy value

let name = [];
if (name) {
    console.log("true");
} else {
    console.log("false");
}

// "0" the zero is officially now a string.it means its true
// [ ] empty array means true
// 'false' it means within the quation its a string now.it means its true