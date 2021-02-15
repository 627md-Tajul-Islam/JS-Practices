// scope means work space
// if the scope is inside the function is called local scope  
// if the scope is outside the function is called global scope  
// let & const are scope variable.
// but var is flexible
// let & const has some limits

function sum(first, second) {
    let result = first + second;
    console.log(result);
    return result;
}

const output = sum(3, 7);